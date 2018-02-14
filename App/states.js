var MainFlow = {
    'main': {
        activeIntents: ['welcome','goToRoster'],
        middleware: ['logInput']
    },
    'rosterNotFull': {
        activeIntents: ['addPlayers', 'removePlayers', 'clearRoster', 'startOver'],
        middleware: ['loadRoster', 'logInput'],
    },
    'rosterFull': {
        activeIntents: ['addPlayers', 'removePlayers', 'clearRoster','startGame', 'startOver'],
        middleware: ['loadRoster', 'logInput']
    },
    "game":{
        activeIntents: ['startOver', 'flip'],
        middleware: ['logInput', 'loadRoster']
    }

}

module.exports = MainFlow
