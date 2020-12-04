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
        // logo: response[0].seller.logo
      },
      description: response[0].descripcion,
      price: response[0].precio,
      currency: "COP",
      rating: response[0].rating,
    });
    return respuesta;
  } catch (error) {
    throw new createError.InternalServerError(error);
  }
}

export const handler = getProductDetail;
