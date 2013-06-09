var thaumApp = thaumApp || {};

thaumApp.factory('aspectService', function ($resource) {

  var AspectResource = $resource('/aspect');
  var SingleAspectResource = $resource(
    '/aspect/findbyName/:name',
    {name: '@id'}
  );


  return {
    getAll: function () {
      var aspects = AspectResource.query({});
      return aspects;
    },

    checkByName: function (name) {
      var serverAspect = SingleAspectResource.get({name: name}, function () {
        if (typeof(serverAspect.id) == "undefined") {
          console.log(name + " does not exist in the database");

          var update_to_server = false;

          if(update_to_server){
            var newAspect = new AspectResource();
            newAspect.name = aspect.name;
            newAspect.clues = aspect.clues;
            newAspect.sources = aspect.sources;

            newAspect.$save();
          }

        } else{
          console.log(name + " exists in the database");
        };
      });
    },

    getByName: function (name) {
      var serverAspect = SingleAspectResource.get({name: name}, function () {
        if (typeof(serverAspect.id) == "undefined") {
          console.log(name + " does not exist in the database");
          return [];
        };

        console.log('Fetched: ' + serverAspect);

        return serverAspect;
      });
    }
  };
});