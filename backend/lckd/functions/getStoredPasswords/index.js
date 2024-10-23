const { docClient, QueryCommand } = require("../../service/db");
const { sendResponse, sendError } = require("../../responses");
const { decrypt } = require("../../utils/cryptoHelper");

const getPasswords = async (userName) => {
  try {
    const command = new QueryCommand({
      TableName: "lckdPasswordsTable",
      IndexName: "usersPasswordIndex",
      KeyConditionExpression: "user = :user",
      ExpressionAttributeValues: {
        ":user": userName,
      },
      ProjectionExpression: "website, password, userName",
    });

    const credentials = await docClient.send(command);
    return { data: credentials, success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

exports.handler = async (event) => {
  try {
    //kolla jwt?
    const userName = event.pathParameters.userName;
    const response = await getPasswords(userName);

    if (!response.success) {
      return sendError(400, "could not get credentials from db");
    }

    let decrypted = [];

    response.data.forEach((credential) => {
      const decryptedPassword = decrypt(credential.password);
      decrypted.push({
        website: credential.website,
        userName: credential.userName,
        password: decryptedPassword,
      });

      return sendResponse({ decrypted, success: true });
    });
  } catch (error) {
    return sendError(500, "could not get credentials from db");
  }
};
