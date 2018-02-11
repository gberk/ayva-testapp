var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var IntentMap = require('./Intents')

var Ayva = require('../ayva')

Ayva.RegisterIntents(IntentMap);
Ayva.RegisterMiddleware(Ayva.Middleware.LogInput)

app.post('/gAssistant', function(req, res) {
	Ayva.ExecuteRequest.FromGoogle(req.body, res);
})

server.listen(process.env.PORT || 3000, function() {
	console.log("Node server started")
});