'use strict';

var authorProjApp = angular.module('authorProjApp', []);

authorProjApp.controller('mainController',['$scope', '$location', function ($scope, $location) {

}]);

authorProjApp.controller('homeController',['$scope', '$location', function ($scope, $location, $route) {
  $scope.text = "Hello World!!!!";
  }]);

authorProjApp.controller('aboutController',['$scope', '$location', function ($scope, $location) {

}]);

authorProjApp.controller('booksController',['$scope', '$location', function ($scope, $location) {

}]);

authorProjApp.controller('blogsController',['$scope', '$location', function ($scope, $location) {

}]);

authorProjApp.controller('contactController',['$scope', '$location', function ($scope, $location) {

}]);

authorProjApp.controller('recommendationController',['$scope', '$location', function ($scope, $location) {

}]);

