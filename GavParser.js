var ExecuteIntent = require('../ayva/IntentExecutor')
var GavAssistant = require('./GavAssistant')
var GavParser = function(gArgs, _res){
    //attach or create Device related to request
    var context = {}
    context.args = gArgs.args
    context.intentName = gArgs.intent
    context.state = gArgs.state
    context.assistant = new GavAssistant(_res)
    ExecuteIntent(context)
}

module.exports = GavParser