var SSMLBuilder = require('../ayva/RequestHandlers/SSMLBuilder')

var GavAssistant = function(_res){
    var res = _res;

    var repeatForRepromptFlag = false;
    this.speechBuilder = new SSMLBuilder();
    this.repromptBuilder = new SSMLBuilder();

    var responseData = {
        speech: "",
        displayText: "",
        data: {"google":{"is_ssml":true,"no_input_prompts":[], "expect_user_response": true}},
        contextOut: [],
        source: "",
        followupEvent: {}
    };

    var resStatus = 200;

    /* /////////////////////////////////
    // Speech Builder Functions
    */ ///////////////////////////////
    this.say = this.speechBuilder.say.bind(this);
    this.play = this.speechBuilder.play.bind(this);
    this.pause = this.speechBuilder.pause.bind(this);

    this.reprompt = {
        say: this.repromptBuilder.say.bind(this),
        play: this.repromptBuilder.play.bind(this),
        pause: this.repromptBuilder.pause.bind(this)
    }

    this.repeatForReprompt = function(){
        repeatForRepromptFlag = true;
        this.reprompt = null;
    }

    this.setContext = function(contextName, lifespan) {
        let context = {
            name: contextName,
            lifespan: lifespan
        }
        responseData.contextOut.push(context)
        return this;
    }

    this.data = function(_data){
        responseData.data = _data;
        return this;
    }

    this.error = function(errorCode){
        resStatus = errorCode;
        return this;
    }

    this.finish = function(opts){
        if(opts){
            if (opts.exit)
                responseData.data.google.expect_user_response = false; // close the microphone
        }
        responseData.speech = this.speechBuilder.getSSML();
        var reprompt = repeatForRepromptFlag ? responseData.speech : this.repromptBuilder.getSSML();
        responseData.data.google.no_input_prompts.push({
            ssml: reprompt
        })
        res.status(resStatus).send(responseData);
    }

}


module.exports = GavAssistant;