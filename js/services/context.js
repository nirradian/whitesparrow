app.service('context', function() {
    this.fprint = function(text)
    {
        this.stdOut.push(text);
    };

    this.stdOut = ['a', 'b'];
    this.showPrompt = true;
});