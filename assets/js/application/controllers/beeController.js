var thaumApp = thaumApp || {};

thaumApp.controller( "BeeController", function ($scope, $http) {
  $scope.bees = [];

  $http.get('/bees.json').success(function (data) {
    $scope.bees = data;
  });

  $scope.filterBees = function (bee) {
    
  }

});