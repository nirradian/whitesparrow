app.directive('commandPrompt', ['context', 'inputHandler', function(context, inputHandler) {
    return {
        restrict: 'E',
        bindToController: true,
        controller: function () {

            this.promptToggle = true;
            this.inputText = "try me";

            this.keyPress = function($event)
            {
                if ($event.keyCode == 13)
                {
                    this.promptToggle = false;
                    var command = this.inputText;
                    this.inputText = "";
                    inputHandler.try(command);

                    this.promptToggle = true;
                }
            };
        },
        controllerAs: 'ctrl',
        template: '><input ng-if="ctrl.promptToggle" type="text" ng-model="ctrl.inputText" ng-keyup="ctrl.keyPress($event);">'

    };
}]);