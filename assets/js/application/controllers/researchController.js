var thaumApp = thaumApp || {};

thaumApp.controller('ResearchController', function ($scope, $resource, $http) {
  /*
  var ResearchResource = $resource('/research');

  $scope.newResearchItem = {
    name:"",
    aspects:[]
  };

  $scope.addResearch = function () {
    //console.log($scope.newResearchItem);
    
    
    var newResearch = new ResearchResource();

    newResearch.name = $scope.newResearchItem.name;
    newResearch.aspects = $scope.newResearchItem.aspects;

    //newResearch.$save();

    $scope.researchItems.push(newResearch);

    $scope.newResearchItem = {
      name:"",
      aspects:[]
    };
  };
  */
  //$scope.researchItems = ResearchResource.query({});

  $http.get('/research.json').success(function (data) {
    $scope.researchItems = data;
  });

});