exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Ajustar conforme a necessidade
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    body: JSON.stringify({ message: 'Hello from Netlify Function' }),
  };
};
