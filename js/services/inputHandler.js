app.service('inputHandler', ['context', '$rootScope', '$timeout', function(context, $rootScope, $timeout) {

    var commandDescriptions = {
        'echo' : "print out a word to the terminal",
        'clear' : "clears the terminal",
        '?' : "shows this list of available commands",
        'exit' : 'leave this system'

    };

    this.availableCommands = {
        'echo': function(job) {

            context.fprint(job.join(" "));
        },
        'clear': function(job) {
            context.clearStdout();
        },
        '?' : function(job) {
            for (var key in this)
            {
                context.fprint(key + "  " + Array(30 - key.length).join("_") + "  " + commandDescriptions[key]);
            }
        },
        'exit': function(job) {
            open(location, '_self').close();
        }
    };



    this.askForPassword = function(inputText)
    {
        context.data.username = inputText;
        context.setPrompt("please enter your access code:")
        this.try = this.finishLogin;
    };

    this.finishLogin = function(inputText)
    {
        context.fprint("Access Granted");
        context.fprint("Welcome " + context.data.username + ", you are currently logged in to the system.");
        context.setPrompt("> ");
        this.try = this.mainLoop;
    };


    this.mainLoop = function(inputText)
    {
        var job = inputText.split(" ");
        var command = job[0];
        job.splice(0,1);
        context.fprint(context.data.prompt + inputText);

        if (command in this.availableCommands)
        {
            this.availableCommands[command](job);
        }
        else if (inputText.length > 0)
            context.fprint(command + " is not a recognized command.");
    };

    this.try = this.askForPassword;


    this.otherCommands = {
        'sleep': function (job) {
            context.fprint("Sleeping...");
            context.disablePrompt();
            $timeout(function() {
                context.enablePrompt();
            }, parseInt(job[0]));
        },
        'login': function(job)
        {
            context.setPrompt("please enter your username:")
            this.try = this.askForPassword;
        }
    };

}]);