async function getProductlist(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context }),
    console.log("Holi")
  };
}

export const handler = getProductlist;


