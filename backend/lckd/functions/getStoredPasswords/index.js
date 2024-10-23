const { docClient, QueryCommand } = require("../../service/db");
const { sendResponse, sendError } = require("../../responses");
const { decrypt } = require("../../utils/cryptoHelper");

const getPasswords = async (userName) => {
  try {
    const command = new QueryCommand({
      TableName: "lckdPasswordsTable",
      IndexName: "usersPasswordIndex",
      KeyConditionExpression: "#userAlias = :user",
      ExpressionAttributeNames: {
        "#userAlias": "user",
      },
      ExpressionAttributeValues: {
        ":user": userName,
      },
      ProjectionExpression: "website, password, userName, iv",
    });

    const { Items } = await docClient.send(command);
    console.log(Items);
    return { data: Items, success: true };
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

    console.log(response);
    // if (!response.success) {
    //   return sendError(400, "could not get credentials from db");
    // }

    let decrypted = [];

    response.data.forEach((credential) => {
      console.log(credential);
      const decryptedPassword = decrypt(credential.password, credential.iv);
      console.log(decryptedPassword);
      decrypted.push({
        website: credential.website,
        userName: credential.userName,
        password: decryptedPassword,
      });
      console.log("decrypted", decrypted);
    });

    return sendResponse({ credentials: decrypted, success: true });
  } catch (error) {
    return sendError(500, {
      message: "could not get credentials from db",
      success: false,
    });
  }
};
