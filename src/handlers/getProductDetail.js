async function getProductDetail(event, context) {
    console.log("Holi!")
    return {
      statusCode: 200,
      body: JSON.stringify({ event, context }),
    };
  }
  export const handler = getProductDetail;