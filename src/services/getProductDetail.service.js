
const { Op } = require("sequelize");
require("dotenv").config();
import Product from "../models/product.model";

export async function getProductDetailService(_id) {
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
    return product;
  } else {
    return [];
  }
}