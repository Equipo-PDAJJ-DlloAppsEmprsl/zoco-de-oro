const sequelize = require('../config/db.config');
require('dotenv').config();
const Product = require('../models/product.model');

async function getProductListService (path){
    const products = await Product.findAll();
    console.log(products)
    //console.log(products.every(product => product instanceof Product)); // true
    //console.log("All users:", JSON.stringify(products, null, 2));
}

module.exports = getProductListService;