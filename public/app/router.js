var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/view/main.html',
            controller: 'mainController'
        })

        .otherwise({ redirectTo: '/' });
});