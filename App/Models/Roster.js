var _ = require('lodash')

var Roster = function(){
    var roster = {'gavin': 'Gavin'};

    return {
        addToRoster: function(sessionId, name){
            if(!roster[sessionId])
                roster[sessionId] = []
    
            roster[sessionId].push(name)
        },
        removeFromRoster: function(sessionId,name){
            _.difference(roster[sessionId] || [],names) 
        },
        getRoster: function(sessionId){
            return roster[sessionId]
        }
    }
}()

module.exports = Roster