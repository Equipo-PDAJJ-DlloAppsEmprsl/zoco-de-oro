const { Op } = require("sequelize");
require("dotenv").config();
const Product = require("../models/product.model");

async function getProductDetailService(_id) {
  Product.sync();

  if (_id) {
    const product = await Product.findAll({
      attributes: [
        "id",
        "nombre",
        "marca",
        "fotos",
        "ciudad",
        "precio",
        "seller",
        "rating",
        "descripcion",
      ],
      where: {
        id: _id,
      },
    });

    console.log("getProductDetailService!", product.length);
    return product[0];
  } else {
    console.log("string vacio");
    return [];
  }
}

module.exports = getProductDetailService;
