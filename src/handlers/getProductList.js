const getProductListService = require('../services/getProductList.service');

async function getProductList(event, context) {

  // SE NECESITA CAPTURAR UN QUERY PARAMETER DEL event
  // let query = ?????????

  let respuesta = await getProductListService('samsung')
  let products = createItems(respuesta);
 
  return {
    statusCode: 200,
    body: {
      query: event.queryStringParameters.search, //modificar
      total: respuesta.length,
      seller: respuesta[0].dataValues.seller,
      items: products
    }
  };

}

const createItems = (items) => {
  let products = []
  items.forEach(element => {
    let product = {
      id: element.dataValues.id,
      name: element.dataValues.nombre,
      brand: element.dataValues.marca,
      thumbnail: element.dataValues.thumbnail,
      city: element.dataValues.ciudad,
      price: element.dataValues.precio,
      currency: "COP",
      rating: element.dataValues.rating
    }
    products.push(product)
  });
}

module.exports  = getProductList;


