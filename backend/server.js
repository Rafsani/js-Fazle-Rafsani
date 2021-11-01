const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const { Sequelize } = require('sequelize');
const userutil = require('./models/user');

const app = express();

const port = 5000;

async function testconnection()
{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", // <-- location of the react app were connecting to
        credentials: true,
    })
); 
app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(cookieParser("secretcode"));

const sequelize = new Sequelize('postgres://bsgjltov:ojKpaC3_GbSLEf-pgHaI8zh4ycNj2RhF@fanny.db.elephantsql.com/bsgjltov');
testconnection();


app.post("/createUser",(req,res) => 
{
    userutil.addUser(req.body.name,req.body.password,req.body.type);
    res.send("added");

});

app.post("/authenticate", (req,res) => {
    if(userutil.validateUser(req.body.username, req.body.password) === false )
    res.send("Unauthorized"); 
});

app.listen(port, () => console.log(`server running at port ${port}`));

