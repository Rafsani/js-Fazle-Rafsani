const { Sequelize, Model, DataTypes, where } = require("sequelize");
const sequelize = new Sequelize('postgres://bsgjltov:ojKpaC3_GbSLEf-pgHaI8zh4ycNj2RhF@fanny.db.elephantsql.com/bsgjltov');


const Product = sequelize.define("product", {
  
    name: DataTypes.TEXT,
  type: {
    type: DataTypes.TEXT,
  },
  description: DataTypes.TEXT,
  
});

// (async () => {
//   await sequelize.sync({ force: true });
//   // Code here
// })();

async function addProduct(name,type,description) 
{
    const newProduct = await Product.create({ name: name, type: type, description: description });
    console.log(newProduct.toJSON());
    newProduct.save();
}

async function deleteProduct(id) 
{
    await Product.destroy ({ where: {id : id} });
}

async function getAllProd()
{
    const products = await Product.findAll();
    
    return products;
}



module.exports = {
    Product,
    addProduct,
    deleteProduct,
    getAllProd,
}