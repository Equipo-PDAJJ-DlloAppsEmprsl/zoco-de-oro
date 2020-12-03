const { Op } = require("sequelize");
require("dotenv").config();
const Product = require("../models/product.model");

async function getProductListService(param) {
  
  Product.sync();

  if(param === '') {
    return []
  }

  const products = await Product.findAll({
    attributes: ['id', 'nombre', 'marca', 'thumbnail', 'ciudad', 'precio', 'seller', 'rating'],
    where: {
      [Op.or]: [
        {
          nombre: {
            [Op.startsWith]: param
          }
        },
        {
          marca: {
            [Op.startsWith]: param
          }
        }
      ]
    }
  });

  if (products.length === 0) {
    products = await Product.findAll({
      attributes: ['id', 'nombre', 'marca', 'thumbnail', 'ciudad', 'precio', 'seller', 'rating'],
      where: {
        [Op.or]: [
          {
            nombre: {
              [Op.substring]: param
            }
          },
          {
            marca: {
              [Op.substring]: param
            }
          }
        ]
      }
    });
  }
  console.log(products.length)
  return products;
}

module.exports = getProductListService;
