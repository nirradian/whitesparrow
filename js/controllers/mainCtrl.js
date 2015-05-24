app.controller("mainCtrl", ['$scope', 'context', 'inputHandler',  function($scope, context, inputHandler) {
    context.fprint(textDB.onload);
    context.fprint(textDB.communication_limited);
    inputHandler.otherCommands.login();
}]);