/*
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
  });*/
  //TODO: mover a un business logic


const getProductListService = require('../services/getProductList.service');
    
async function getProductlist(event, context) {

  const  response = await getProductListService('samsung');
  return {
    statusCode: 200,
    body: JSON.stringify({       
      query: event.queryStringParameters, //modificar
      total: response.length,
      response: response 
    }),
  };
}
export const handler = getProductlist;

