var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var IntentMap = require('./App/Intents')
var GavParser = require('./GavParser')
var States = require('./App/states')
var Ayva = require('../ayva')

//AYVA CONFIG
Ayva.Config.RegisterIntents(IntentMap);
Ayva.Config.RegisterStates(States)
Ayva.ExecuteRequest.FromGav = GavParser;

app.post('/gAssistant', function(req, res) {
    Ayva.ExecuteRequest.FromGoogle(req.body, res);    
})

app.post('/gMoneyAssistant', function(req,res) {
    Ayva.ExecuteRequest.FromGav(req.body, res)
})

server.listen(process.env.PORT || 3000, function() {
	console.log("Node server started")
});