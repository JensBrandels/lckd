function sendResponse(data) {
  return {
    statusCode: 200,
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  };
}

function sendError(statusCode, message) {
  return {
    statusCode: statusCode,
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  };
}
module.exports = { sendResponse, sendError };