app.directive('standardOutput', ['context', function(context) {
    return {
        restrict: 'E',
        template: '<p ng-repeat="line in getStdOut() track by $index">{{line}}</p>',
        controller: function ($scope, $element) {
            $scope.getStdOut = function() {
                return context.stdOut;
            }
        }
    };

}]);