const crypto = require('crypto');
var aesjs = require('aes-js');
const assert = require('assert').strict;

// the argument in paranthesis show length of the prime number
// the bigger number ,the more difficult to break the cypher ,the more clock cycle needed to generate it
const alice = crypto.createDiffieHellman(128);
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());

const aliceKey = alice.generateKeys();
const bobKey = bob.generateKeys();

const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

const key = aliceSecret;
const iv = crypto.randomBytes(16);
let text = "Hello World";
const pad = "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
const cut = (text.length % 16);
let padAmmo = 16 - cut;
text = text + pad.substr(0,padAmmo);
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var encryptedBytes = aesCbc.encrypt(textBytes);
var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

console.log(decryptedText);
