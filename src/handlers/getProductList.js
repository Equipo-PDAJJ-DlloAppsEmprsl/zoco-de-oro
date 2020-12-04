
async function getProductlist(event, context) {
const getProductListService = require('../services/getProductList.service');

async function getProductList(event, context) {

  // SE NECESITA CAPTURAR UN QUERY PARAMETER DEL event
  // let query = ?????????

  let respuesta = await getProductListService('samsung')
  let products = createItems(respuesta);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
    // body: {
    //   query: event.queryStringParameters, //modificar
    //   total: respuesta.length,
    //   seller: respuesta[0].dataValues.seller,
    //   items: products
    // }
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
//TODO: mover a un business logic

module.exports  = getProductList;


