var _ = require('lodash')

var Roster = function(){
    this.roster = {};

    this.addToRoster = function(sessionId, name){
        if(!this.roster[sessionId])
            this.roster[sessionId] = []

        this.roster[sessionId].push(name)
    }

    this.removeFromRoster = function(sessionId,name){
        _.difference(this.roster[sessionId] || [],names) 
    }

    this.getRoster = function(sessionId){
        return this.roster[sessionId]
    }
}()

module.exports = Roster