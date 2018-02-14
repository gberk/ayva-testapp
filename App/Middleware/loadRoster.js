var Roster = require('../Models/Roster')

var loadRoster = function(context){
    context.Roster = Roster.getRoster(context.args.sessionCode)
}

module.exports = {'loadRoster': loadRoster}