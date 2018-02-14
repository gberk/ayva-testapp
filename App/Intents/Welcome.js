
var execute = function(context){
    context.assistant.say("You're welcome!").finish();
}

var WelcomeIntent = {
    execute: execute
}

module.exports = WelcomeIntent;    