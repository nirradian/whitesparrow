app.service('inputHandler', ['context', function(context) {

    this.availableCommands = {
        'echo': function(job) {

            context.fprint(job.join(" "));
        },
        'clear': function(job) {
            context.stdOut = [];
        },
        'sleep': function (job) {
            context.fprint("Sleeping...");
            var now = new Date().getTime();
            while(new Date().getTime() < now + parseInt(job[0])){ /* do nothing */ }
        }
    }

    this.try = function(inputText)
    {
        var job = inputText.split(" ");
        var command = job[0];
        job.splice(0,1);

        if (command in this.availableCommands)
        {

            return this.availableCommands[command](job);
        }
        else
            context.fprint(command + " is not a recognized command.");
    }


}]);