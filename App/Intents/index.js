var Intents = {}

Intents.welcome = require('./Welcome');
Intents.addplayers = require('./AddPlayers');
Intents.removeplayers = require('./RemovePlayers');
Intents.startover = require('./StartOver');
Intents.flip= require('./Flip')

module.exports = Intents;
