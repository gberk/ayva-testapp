var Roster = require('../Models/Roster')

var loadRoster = function(context){
    return Roster.getRoster(context.args.sessionCode)
}

module.exports = loadRoster