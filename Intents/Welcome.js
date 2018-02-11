
var execute = function(args, assistant){
    assistant.say("Do a flip").reprompt.say("Do a flip!").finish();
}

var WelcomeIntent = {
    execute: execute
}

module.exports = WelcomeIntent;    