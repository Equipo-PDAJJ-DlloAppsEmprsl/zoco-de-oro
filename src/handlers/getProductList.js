import { getProductListService } from "../services/getProductList.service";
import createError from "http-errors";
import middy from "@middy/core";
import httpJsonBodyParser from "@middy/http-json-body-parser";
import httpEventNormalizer from "@middy/http-event-normalizer";
import httpErrorHandler from "@middy/http-error-handler";

async function getProductList(event, context) {

  context.callbackWaitsForEmptyEventLoop = false;
  const respuesta = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
  };

  const query = event.queryStringParameters.q;

  try {
    let response = await getProductListService(query);
    let products = createItems(response);
    
    respuesta.statusCode = 200;
    respuesta.body = JSON.stringify({
      query: query,
      total: 0,
      seller: {
        id: response[0].dataValues.seller.id,
        name: response[0].dataValues.seller.nombre
      },
      items: products
    })
    return respuesta
  } catch (error) {
    console.log("El error es el siguiente: ", error);
    throw new createError.InternalServerError(error);
  }
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
  return products;
}

export const handler = middy(getProductList)
  .use(httpJsonBodyParser())
  .use(httpEventNormalizer())
  .use(httpErrorHandler());
