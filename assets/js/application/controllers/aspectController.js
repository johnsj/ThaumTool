var thaumApp = thaumApp || {};

thaumApp.controller("AspectController", function ($scope, $http, $routeParams, aspectService) {

  if ($routeParams.aspect) {
    $scope.search = $routeParams.aspect;
  };

  $scope.isOnServer = function(aspect){
    
    aspectService.checkByName(aspect.name);

  };

  $scope.aspects = aspectService.getAll();

  //$scope.aspects = aspectService.getAll();

  /*$http.get('/aspects.json').success(function (data) {
    $scope.aspects = data;

    //_.each(data, $scope.isOnServer)
  });*/

});