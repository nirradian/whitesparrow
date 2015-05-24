app.directive('standardOutput', ['context', function(context) {
    return {
        restrict: 'E',
        template: '<p ng-repeat="line in context.stdOut track by $index">{{line}}</p>',
        controller: function ($scope, $element) {
            $scope.context = context.data;
        }
    };

}]);