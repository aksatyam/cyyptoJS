const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js");
const JSON_DATA = {
    userId: "100422",
    password: "max@1234"
};

const ciphertext1 = JSON.stringify(JSON_DATA)

const key = CryptoJS.enc.Utf8.parse("8080808080808080");
const iv = CryptoJS.enc.Utf8.parse("9090909090909090");


const encryptedData = AES.encrypt(ciphertext1, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

console.log(`encryptedData : ${encryptedData}`);

const ciphertext2 = encryptedData;
const decreptedData = AES.decrypt(ciphertext2, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
const data = decreptedData.toString(CryptoJS.enc.Utf8);
console.log(`decreptedData :`);
console.log(`${JSON.stringify(JSON.parse(data), null, 2)}`)