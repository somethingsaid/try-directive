var myApp = angular.module('myApp', []);

myApp.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: './signup.html',
        replace: true
    }
});