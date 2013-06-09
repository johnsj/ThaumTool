var thaumApp = thaumApp || {};

thaumApp.controller('ResearchController', function ($scope, $http, $routeParams, researchService) {

  if ($routeParams.research) {
    $scope.search = $routeParams.research.split('_').join(' ');
  };

  $scope.isOnServer = function(research) {
    researchService.checkByName(research.name);
  };
  
  $scope.researchItems = researchService.getAll();

  /*$http.get('/research.json').success(function (data) {

    //_.each(data, $scope.isOnServer);
  });*/

});