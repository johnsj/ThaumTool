var thaumApp = thaumApp || {};

thaumApp.factory('aspectAutoCompleteDataService', function ($resource) {

    var AspectResource = $resource('/aspect');

    var aspects = AspectResource.query({});

    return {
      getSource: function () {
        var results = _.map(aspects, function (aspect) {
          return aspect.name;
        });

        return results;
      }
    };
  })
  .factory('aspectAutoCompleteHelpers', function ($resource) {

    return {
      autoSplit: function ( val ) {
        return val.split( /,\s*/ );
      },

      autoExtractLast: function ( term ) {
        return this.autoSplit( term ).pop();
      }
    };
  })