const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js");

const ciphertext = "RclT06W1HNSVxqj9Qtjm6qkgQf2h3nSKYZwcmi4hbbbTTotrvaP6QJQ8xQ0wEWe/"
const key = CryptoJS.enc.Utf8.parse("8080808080808080");
const iv = CryptoJS.enc.Utf8.parse("9090909090909090");

const decreptedData = AES.decrypt(ciphertext, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

const data = decreptedData.toString(CryptoJS.enc.Utf8);
console.log(data);