const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const { exec } = require('child_process');

global.userMap = new Map();
global.newMessages = new Map();



app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('I did sumthing!')
});

app.post('/', (req, res) => {
    let receivedMessage = req.body.encryptedMessage;
    let recipient = req.body.recipient;
    let sender = req.body.sender;
    global.newMessages.set(recipient, JSON.stringify({"sender": req.body.sender, "message": receivedMessage}));
});

app.post('/register', (req, res) => {
    let newUser = req.body.username;
    console.log('Added new user:', newUser);
    let newUserPubKey = req.body.pubKey;
    global.userMap.set(newUser, newUserPubKey);
    let mapArray = [...userMap];
    let x = JSON.stringify(mapArray);
    fs.open('./users', 'a+', (err, fd) => {
        fs.write(fd, x, (err, written, string) => {
            if (err) throw err;
        });
    });


});
app.get('/getKey', (req, res) => {
    let reqUser = req.query.username;
    let myMap = null;
    fs.readFile('./users', (err, data) => {
        console.log(data);
        myMap = new Map(JSON.parse(data));
        let reqPubKey = global.userMap.get(reqUser);
        res.send(reqPubKey);
    });

});

app.post('/pullMessages', (req, res) => {
    let reqUser = req.body.username;
    console.log();
    res.send(global.newMessages.get(reqUser));
});
app.listen(port);