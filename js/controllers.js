app.controller('HomeController', function($scope, $http, $route) {
  $scope.view = {};
  $scope.view.message = "Welcome!"

  $scope.searchMovie = function() {
    var input = $scope.view.searchInput;
    var url ="http://www.omdbapi.com/?s=" + input;
    // console.log(url);
    $http.get(url)
    .success(function(data) {
      $scope.view.movies = data.Search;
      console.log(data.Search)
    })
    .catch(function(error) {
      $scope.view.error = error.status;
    })
  }

});
