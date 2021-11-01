const { Sequelize, Model, DataTypes, where } = require("sequelize");
const sequelize = new Sequelize('postgres://bsgjltov:ojKpaC3_GbSLEf-pgHaI8zh4ycNj2RhF@fanny.db.elephantsql.com/bsgjltov');

const User = sequelize.define("user", {
  
    username: DataTypes.TEXT,
  type: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  password: DataTypes.TEXT,
  
});

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();

async function addUser(name,pass,type) 
{
    const newuser = await User.create({ username: name, password: pass, type: type });
    console.log(newuser.toJSON());
    newuser.save();
}

async function validateUser(username, password)
{
    const data = await User.findOne({ where: {username: username}});
    if(data === null)
    {
        return false;
    }
    else return true;
}

module.exports = {
    User,
    addUser,
    validateUser,
}