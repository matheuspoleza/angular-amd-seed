define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("webapp", ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
    .when("/home", angularAMD.route({
        templateUrl: 'view_home.html', controller: 'HomeCtrl', controllerUrl: 'controller_home'
    }))
    .otherwise({redirectTo: "/home"});
  });

  return angularAMD.bootstrap(app);
});
