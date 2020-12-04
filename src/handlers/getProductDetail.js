async function getProductDetail(event, context) {
    console.log("Holi!222")
    return {
      statusCode: 200,
      body: JSON.stringify('ok'),
    };
  }
  export const handler = getProductDetail;