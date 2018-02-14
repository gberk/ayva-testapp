
var execute = function(context){
    context.say("You're welcome!").finish();
}

var WelcomeIntent = {
    execute: execute
}

module.exports = WelcomeIntent;    