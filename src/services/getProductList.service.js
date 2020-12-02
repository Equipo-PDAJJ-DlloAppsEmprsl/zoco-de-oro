const sequelize = require("../config/db.config");
require("dotenv").config();
const Product = require("../models/product.model");
const User = require("../models/user.model");

async function getProductListService(path) {
  Product.sync();

  const products = await Product.findAll();
  console.log(products.every(product => product instanceof Product)); // true
  console.log("All products:", JSON.stringify(products, null, 2));
  console.log('productos sin stringify', products)
  // const producto = await Product.create({
  //   nombre: "gallito",
  //   marca: "oster",
  //   ciudad: {"nombre": "medellin"},
  //   precio: 2500,
  //   seller: {"nombre": "empresa vendedora"},
  //   rating: 4.5,
  //   descripcion: "producto de prueba",
  //   thumbnail: "www.facebook.com",
  //   fotos: {"id": "fot de prueba"},
  // });
  // console.log("Jane's auto-generated ID:", producto.id);
}

module.exports = getProductListService;
