const crypto = require('crypto');
var aesjs = require('aes-js');
const assert = require('assert').strict;

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

console.log(decryptedText);