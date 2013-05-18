var thaumApp = thaumApp || {};

thaumApp.controller("AspectController", function ($scope, $resource, $http) {
  //var AspectResource = $resource('/aspect');

  /*var SingleAspectResource = $resource(
      '/aspect/findbyName/:name',
      {name: '@id'}
    );

  $scope.isOnServer = function(aspect){
    console.log("Running server check with name: " + aspect.name)
    var serverAspect = SingleAspectResource.get({name: aspect.name}, function () {
      console.log(serverAspect);
      console.log(aspect);
      if (typeof(serverAspect.id) == "undefined") {
        console.log("No");
        console.log("Attempting to save to DB");
        var newAspect = new AspectResource();
        newAspect.name = aspect.name;
        newAspect.clues = aspect.clues;
        newAspect.sources = aspect.sources;

        newAspect.$save();
      } else{
        console.log("Yes");
      };
    });

  };*/

  //$scope.aspects = AspectResource.query({});

  $http.get('/aspects.json').success(function (data) {
    $scope.aspects = data;
  });

});