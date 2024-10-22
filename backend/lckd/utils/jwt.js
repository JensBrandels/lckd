const jwt = require("jsonwebtoken");

export const createToken = (userName) => {
  return jwt.sign({ userName: userName }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

//check if the token is valid
export const isTokenValid = (token) => {
  if (!token) {
    return;
  }
  const upDatedToken = token.replace("Bearer ", "");
  return jwt.verify(upDatedToken, process.env.JWT_SECRET);
};
