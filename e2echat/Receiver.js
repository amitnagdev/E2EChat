import {e2eEnc, sendPublicSen} from "./Sender";

const crypto = require('crypto');
var aesjs = require('aes-js');
const assert = require('assert').strict;

let bob;

const sendPublicRec = (async (recipient, myid) => {
    let publicData = getPublicData(bob);
    let prime = publicData.recPrime;
    let generator = publicData.recGen;
    let iv = publicData.recIV;
    bob = crypto.createDiffieHellman(prime, generator);
    const bobKey = bob.generateKeys();
    sendData(iv, prime, generator, bobKey, recipient, myid);
});


const e2eDec = (async (messages, iv, myid) => {
    let message = getMessage(myid);
    let encryptedBytes = message.message;
    let publicData = getPublicData(bob);
    let aliceKey = publicData.pubKey;
    let iv = publicData.recIV;
    const key = bob.computeSecret(aliceKey);
    var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
    var decryptedBytes = aesCbc.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return(decryptedText);
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

const getMessage = (async (name) => {
    let response = await fetch('http://3.18.223.203:8080/pullMessages', {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": name}),
    });
    return (await response.json());
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

export {sendPublicRec};
export {e2eDec};

sendPublicSen(recipient, myid);
e2eEnc(recipient, myid);

import {sendPublicSen} from "./Sender.js"
import {e2eEnc} from "./Sender.js"
import {sendPublicRec} from "./Receiver.js"
import {e2eDec} from "./Receiver.js"
