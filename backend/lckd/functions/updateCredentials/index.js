const { docClient, UpdateCommand } = require("../../service/db");
const { sendResponse, sendError } = require("../../responses");
const { encrypt } = require("../../utils/cryptoHelper");

const updateCredentials = async (passwordId, newCredentials) => {
  try {
    const command = new UpdateCommand({
      TableName: "lckdPasswordsTable",
      Key: { passwordId: passwordId },
      UpdateExpression:
        "SET website = :website userName = :userName password = :password",
      ExpressionAttributeValues: {
        website: newCredentials.website,
        userName: newCredentials.userName,
        password: newCredentials.password,
      },
      ReturnValues: "ALL_NEW",
    });

    const response = await docClient.send(command);
    console.log("response", response);
    return { data: response, success: true };
  } catch (error) {
    console.log(error);
    return { sucess: false };
  }
};

exports.handler = async (event) => {
  try {
    const { passwordId, newCredentials } = JSON.parse(event.body);

    const encryptedPassword = encrypt(newCredentials.password);

    const credentials = {
      website: newCredentials.website,
      userName: newCredentials.userName,
      password: encryptedPassword,
    };

    const response = await updateCredentials(passwordId, credentials);
    if (!response.success) {
      return sendError(400, "could not update credentials");
    }

    return sendResponse({ sucess: true, updated: response.data });
  } catch (error) {
    console.log(error);
    sendError(500, "could not update to db");
  }
};
