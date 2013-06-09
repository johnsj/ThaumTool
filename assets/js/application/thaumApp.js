var thaumApp = thaumApp || {};

thaumApp = angular
  .module('thaumApp',['ui.bootstrap','ngResource']);

// var thaumApp = angular
//   .module('thaumApp',['ngResource'])
//   .config(function($routeProvider){
//       $routeProvider
//         .when('/aspects',
//         {
//           template:$('#templates-listaspects').html(),
//           controller: 'AspectController'
//         })
//         .when('/research',{
//           controller: 'ResearchController',
//           template:$('#templates-listresearch').html()
//         })
//         .otherwise({redirectTo: '/aspects'});
//     })
//   .factory('aspectAutoCompleteDataService', function ($resource) {

//     var AspectResource = $resource('/aspect');

//     var aspects = AspectResource.query({});

//     return {
//       getSource: function () {
//         var results = _.map(aspects, function (aspect) {
//           return aspect.name;
//         });

//         return results;
//       }
//     };
//   })
//   .factory('aspectAutoCompleteHelpers', function ($resource) {

//     return {
//       autoSplit: function ( val ) {
//         return val.split( /,\s*/ );
//       },

//       autoExtractLast: function ( term ) {
//         return this.autoSplit( term ).pop();
//       }
//     };
//   })
//   .directive('aspectAutoComplete', function (aspectAutoCompleteDataService, aspectAutoCompleteHelpers) {
    
    
//     return {
//       link: function(scope, elem, attr, ctrl){
//         $(elem).bind( "keydown", function( event ) {
//           if ( event.keyCode === $.ui.keyCode.TAB &&
//               $( this ).data( "ui-autocomplete" ).menu.active ) {
//             event.preventDefault();
//           }
//         })
//         .autocomplete({
//           minLength: 0,
//           source: function( request, response ) {
//             // delegate back to autocomplete, but extract the last term
//             response( $.ui.autocomplete.filter(
//               aspectAutoCompleteDataService.getSource(), aspectAutoCompleteHelpers.autoExtractLast( request.term ) ) );
//           },
//           focus: function() {
//             // prevent value inserted on focus
//             return false;
//           },
//           select: function( event, ui ) {
//             var terms = aspectAutoCompleteHelpers.autoSplit( this.value );
//             // remove the current input
//             terms.pop();
//             // add the selected item
//             terms.push( ui.item.value );
//             // add placeholder to get the comma-and-space at the end
//             //terms.push( "" );
//             scope.newResearchItem.aspects = terms;
//             scope.$digest();
//             this.value = terms.join( ", " );
//             return false;
//           }
//         })
//       }
//     };
//   })
//   .controller("AspectController", function ($scope, $resource) {
//     var AspectResource = $resource('/aspect');

//     var SingleAspectResource = $resource(
//         '/aspect/findbyName/:name',
//         {name: '@id'}
//       );

//     $scope.isOnServer = function(aspect){
//       console.log("Running server check with name: " + aspect.name)
//       var serverAspect = SingleAspectResource.get({name: aspect.name}, function () {
//         console.log(serverAspect);
//         console.log(aspect);
//         if (typeof(serverAspect.id) == "undefined") {
//           console.log("No");
//           console.log("Attempting to save to DB");
//           var newAspect = new AspectResource();
//           newAspect.name = aspect.name;
//           newAspect.clues = aspect.clues;
//           newAspect.sources = aspect.sources;

//           newAspect.$save();
//         } else{
//           console.log("Yes");
//         };
//       });

//     };

//     $scope.aspects = AspectResource.query({});

//   })
//   .controller('ResearchController', function ($scope, $resource) {
//     var ResearchResource = $resource('/research');

//     $scope.newResearchItem = {
//       name:"",
//       aspects:[]
//     };

//     $scope.addResearch = function () {
//       //console.log($scope.newResearchItem);
      
      
//       var newResearch = new ResearchResource();

//       newResearch.name = $scope.newResearchItem.name;
//       newResearch.aspects = $scope.newResearchItem.aspects;

//       //newResearch.$save();

//       $scope.researchItems.push(newResearch);

//       $scope.newResearchItem = {
//         name:"",
//         aspects:[]
//       };
//     };

//     $scope.researchItems = ResearchResource.query({});

//   });