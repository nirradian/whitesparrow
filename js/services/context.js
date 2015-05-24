app.factory('context', function() {
    var data = {
        prompt: '>',
        promptEnabled: true,
        stdOut: []
    };

    return {
        data: data,
        setPrompt: function(newPrompt) { data.prompt = newPrompt },
        disablePrompt: function() { data.promptEnabled = false},
        enablePrompt: function() { data.promptEnabled = true},
        clearStdout: function() { data.stdOut = []},
        fprint: function(text)        {            data.stdOut.push(text);        }
    };
});