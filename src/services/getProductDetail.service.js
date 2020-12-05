const { Op } = require("sequelize");
require("dotenv").config();
import Product from "../models/product.model";

export async function getProductDetailService(_id) {
  // Product.sync();

  if (_id) {
    let product = await Product.findAll({
      attributes: [
        "id",
        "nombre",
        "marca",
        "thumbnail",
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
    return product;
  } else {
    console.log("string vacio");
    return [];
  }
}
