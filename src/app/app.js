define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app_folder = 'src/app/';
  var app = angular.module('webapp', ['ngRoute']);
  app.config(function ($routeProvider) {
    $routeProvider
    .when('/home', angularAMD.route({
        templateUrl:'src/app/home/home_template.html',
        controller: 'HomeCtrl',
        controllerUrl: 'home/home_controller'
    }))
    .otherwise({
      redirectTo: '/home'
    });
  });

  return angularAMD.bootstrap(app);
});
