const crypto = require('crypto');
var aesjs = require('aes-js');
const assert = require('assert').strict;

/*
const registerUser = (async (name, publicKey) => {
    await fetch('http://3.18.223.203:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"username": name, "pubKey": publicKey}),
    });
});
*/
let alice;

const sendPublicSen = (async (recipient, myid) => {
    alice = crypto.createDiffieHellman(128);
    let aliceKey = alice.generateKeys();
    const iv = crypto.randomBytes(16);
    sendData(iv, alice.getPrime(), alice.getGenerator(), aliceKey, recipient, myid);
});


const e2eEnc = (async (messages, iv, recipient, myid) => {
    let publicData = getPublicData(alice);
    let bobKey = publicData.publicKey;
    const key = alice.computeSecret(bobKey);
    let text = messages;
    const pad = "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
    const cut = (text.length % 16);
    let padAmmo = 16 - cut;
    text = text + pad.substr(0,padAmmo);
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    var encryptedBytes = aesCbc.encrypt(textBytes);
    sendMessage(encryptedBytes, recipient, myid);
});

const sendMessage = (async (messages, recipient, sender) => {
    await fetch('http://3.18.223.203:8080/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"encryptedMessage": messages[0].text, "recipient": recipient, "sender": sender,}),
    });
});

const sendData = (async (iv, generator, prime, publicKey, recipient, sender) => {
    await fetch('http://3.18.223.203:8080/sendPublicData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"recIV": iv, "recGen": generator, "recPrime": prime, "pubKey": publicKey,"recipient": recipient, "sender": sender,}),
    });
});

const getPublicData = (async (name) => {
    let response = await fetch('http://3.18.223.203:8080/pullPublicData', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": name}),
    });
    return (await response.json());
});

export {sendPublicSen};
export {e2eEnc};