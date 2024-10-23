const { docClient, PutCommand, UpdateCommand } = require("../../service/db");
const { sendResponse, sendError } = require("../../responses");
const { v4: uuidv4 } = require("uuid");
const { encrypt } = require("../../utils/cryptoHelper");

const addNewCredentials = async (userName, credentials, encryptedPassword) => {
  try {
    const passwordId = uuidv4();
    const command = new PutCommand({
      TableName: "lckdPasswordsTable",
      Item: {
        passwordId: passwordId,
        user: userName,
        website: credentials.website,
        userName: credentials.userName,
        password: encryptedPassword,
      },
    });
    const { Item } = await docClient.send(command);
    console.log("item", Item);

    return { data: Item, success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

exports.handler = async (event) => {
  try {
    //kolla jwt
    console.log(event);
    const { userName, credentials } = JSON.parse(event.body);

    const encryptedPassword = encrypt(credentials.password);
    console.log("emcrypted", encryptedPassword);
    const response = await addNewCredentials(
      userName,
      credentials,
      encryptedPassword
    );
    console.log("response", response);
    if (!response.success) {
      return sendError(400, {
        message: "could not add credentials",
        success: false,
      });
    }

    return sendResponse({ newCredentials: response.data, success: true });
  } catch (error) {
    return sendError(500, { message: "could not add to db", success: false });
  }
};
