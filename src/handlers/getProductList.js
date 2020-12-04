
import {getProductListService} from '../services/getProductList.service';

async function getProductList(event, context) {

  // SE NECESITA CAPTURAR UN QUERY PARAMETER DEL event
  // let query = ?????????
  let response;
  try {
    response = await getProductListService('samsung')
    console.log("respuesta: ", response);
  }catch(ex){
    console.log("error", ex);
    response = ex;
  }

  
  const stringRpta = response.toString();
  return {
    statusCode: 200,
    response: JSON.stringify({stringRpta}),
    body: JSON.stringify({ event, context }),
  };

}
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



  export const handler = getProductList;



