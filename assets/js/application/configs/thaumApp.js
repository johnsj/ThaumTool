var thaumApp = thaumApp || {};

thaumApp.config(function($routeProvider){
  $routeProvider
    .when('/aspects',
    {
      templateUrl: 'template/listaspects.html',
      controller: 'AspectController'
    })
    .when('/aspects/:aspect',
    {
      templateUrl: 'template/listaspects.html',
      controller: 'AspectController'
    })
    .when('/researches',{
      controller: 'ResearchController',
      templateUrl: 'template/listresearch.html'
    })
    .when('/researches/:research',{
      controller: 'ResearchController',
      templateUrl: 'template/listresearch.html'
    })
    .when('/bees',{
      controller: 'BeeController',
      templateUrl: 'template/listbees.html'
    })
    .otherwise({redirectTo: '/aspects'});
})