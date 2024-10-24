const crypto = require("crypto");

const encrypt = (text) => {
  const algorithm = "aes-256-cbc";
  const key = process.env.CRYPTO_KEY;
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { string: encrypted, iv: iv.toString("hex") };
};

const decrypt = (encryptedText, iv) => {
  const algorithm = "aes-256-cbc";
  const decipher = crypto.createDecipheriv(
    algorithm,
    process.env.CRYPTO_KEY,
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

module.exports = { encrypt, decrypt };
