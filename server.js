const AES = require("crypto-js/aes");
const CryptoJS = require("crypto-js");

const ciphertext1 = "a0w9Ed6tgSftWhH+JWLcDw=="
const ciphertext2 = "mlic@1234"

const key = CryptoJS.enc.Utf8.parse("8080808080808080");
const iv = CryptoJS.enc.Utf8.parse("9090909090909090");

const decreptedData = AES.decrypt(ciphertext1, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});
const data = decreptedData.toString(CryptoJS.enc.Utf8);
console.log(`decreptedData ${data}`);

const encryptedData = AES.encrypt(ciphertext2, key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

console.log(`encryptedData ${encryptedData}`);