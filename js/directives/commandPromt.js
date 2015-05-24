app.directive('commandPrompt', ['context', 'inputHandler', '$timeout', function(context, inputHandler, $timeout) {
    return {
        restrict: 'E',
        bindToController: true,
        controller: function ($scope) {

            $scope.context = context.data;
            $scope.prompt = ">";
            $scope.promptToggle = true;

            $scope.keyPress = function($event)
            {
                if ($event.keyCode == 13)
                {
                    var command = this.inputText;
                    this.inputText = "";

                    inputHandler.try(command);

                }
            };
        },
        template: '<div ng-if="context.promptEnabled == true">{{context.prompt}}<input type="text" ng-model="inputText" ng-keyup="keyPress($event);"></div>'

    };
}]);