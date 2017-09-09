//Routes
angular.module('authorProjApp',[] ,function($routeProvider, $locationProvider, $stateProvider){



    $routeProvider


    .when('/home', {
        templateUrl: 'app/views/main.html',
        controller: 'mainController'
    })

    .when('/about',{

        templateUrl: 'app/views/about.html',
        controller: 'aboutController'

     })
    .when('/blogs',{

        templateUrl: 'app/views/blogs.html',
        controller: 'blogsController'

     })
     .when('/books',{

        templateUrl: 'app/views/books.html',
        controller: 'booksController'

     })
     .when('/contact',{

        templateUrl: 'app/views/contact.html',
        controller: 'contactController'

     })
     .when('/recommendation',{

        templateUrl: 'app/views/recommendation.html',
        controller: 'recommendationController'

     })
     .otherwise({
        redirectTo: '/'
      });
});
