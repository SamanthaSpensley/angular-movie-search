var app = angular.module('movieSearch', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      // .otherwise({ redirectTo: '/' })
      $locationProvider.html5Mode(true);
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/view/:imdbID*', {
    templateUrl: 'partials/movie.html',
    controller: 'MovieController'
  })
  $locationProvider.html5Mode(true);
})
