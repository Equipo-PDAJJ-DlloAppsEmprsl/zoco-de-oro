import { getProductDetailService } from "../services/getProductDetail.service";
import createError from "http-errors";

async function getProductDetail(event, context) {
  context.callbackWaitsForEmptyEventLoop = false;
  const respuesta = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  };
  const parameter = event.pathParameters.ID;

  try {
    let response = await getProductDetailService(parameter);

    if(response.length!=0){
      respuesta.statusCode = 200;
      respuesta.body = JSON.stringify({
        id: response[0].id,
        name: response[0].nombre,
        brand: response[0].marca,
        thumbnail: response[0].thumbnail,
        pictures: response[0].fotos,
        city: {
          id: response[0].ciudad.id,
          name: response[0].ciudad.nombre,
        },
        seller: {
          id: response[0].seller.id,
          name: response[0].seller.nombre,
          logo: 'https://secureservercdn.net/198.71.233.11/d00.9b4.myftpupload.com/wp-content/uploads/2018/05/zoco-de-oro.jpg?time=1599903781'
        },
        description: response[0].descripcion,
        price: response[0].precio,
        currency: "COP",
        rating: response[0].rating,
      });
      
    }else{
      respuesta.statusCode = 400;
      respuesta.body = JSON.stringify("No existe el producto");

    }

    return respuesta;
  } catch (error) {
    throw new createError.InternalServerError(error);
  }
}

export const handler = getProductDetail;