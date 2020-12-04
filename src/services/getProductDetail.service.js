const { Op } = require("sequelize");
require("dotenv").config();
import Product from "../models/product.model";

async function getProductDetailService(_id) {
  Product.sync();

  if (_id) {
    let product = await Product.findAll({
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

export default getProductDetailService;
