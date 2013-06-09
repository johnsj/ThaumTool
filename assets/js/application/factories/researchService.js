var thaumApp = thaumApp || {};

thaumApp.factory('researchService', function ($resource) {

  var ResearchResource = $resource('/research');
  var SingleResearchResource = $resource(
    '/research/findbyName/:name',
    {name: '@id'}
  );


  return {
    getAll: function () {
      var researches = ResearchResource.query({});
      return researches;
    },

    checkByName: function (research) {

      var cleanName = research.name.split(' ');
      cleanName = cleanName.join('_');

      var serverResearch = SingleResearchResource.get({name: cleanName}, function () {
        if (typeof(serverResearch.id) == "undefined") {
          console.log(cleanName + " does not exist in the database");

          var update_to_server = false;

          if (update_to_server) {
            console.log('Updating server!');
            var newResearch = new ResearchResource();
            newResearch.name = research.name;
            newResearch.aspects = research.aspects;

            newResearch.$save();
          };


        } else{
          console.log(cleanName + " exists in the database");
        };
      });
    },

    getByName: function (name) {
      var serverResearch = SingleResearchResource.get({name: name}, function () {
        if (typeof(serverResearch.id) == "undefined") {
          console.log(name + " does not exist in the database");
          return {};
        } else{
          return serverResearch;
        };
      });
    }
  };
});