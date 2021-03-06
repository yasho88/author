'use strict';

/**
 * @ngdoc overview
 * @name authorProjApp
 * @description
 * # authorProjApp
 *
 * Main module of the application.
 */
// angular.module('authorProjApp', [
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//   ]);


  var authorProjApp = angular.module("authorProjApp", ['ngRoute','ngResource','ngCookies']);

  //Routes
  authorProjApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider


      .when('/home', {
        controller: 'homeController',
        templateUrl: '/app/views/main.html',

      })

      .when('/about',{

          templateUrl: '/app/views/about.html',
          controller: 'aboutController'

       })
      .when('/blogs',{

          templateUrl: '/app/views/blogs.html',
          controller: 'blogsController'

       })
       .when('/books',{

          templateUrl: '/app/views/books.html',
          controller: 'booksController'

       })
       .when('/contact',{

          templateUrl: '/app/views/contact.html',
          controller: 'contactController'

       })
       .when('/recommendation',{

          templateUrl: '/app/views/recommendation.html',
          controller: 'recommendationController'

       })
       .otherwise({
          redirectTo: '/'
        });
  }]);

  authorProjApp.controller('homeController', function($scope, $route) {
    $scope.text = "Hello World!!!!";
  });
