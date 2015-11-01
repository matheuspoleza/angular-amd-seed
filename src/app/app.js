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
    .when('/first_page', angularAMD.route({
      templateUrl: 'src/app/first/first_page_template.html',
      controller: 'FirstPageController',
      controllerUrl: 'first/first_page_controller'
    }))
    .when('/second_page', angularAMD.route({
      templateUrl: 'src/app/second/second_page_template.html',
      controller: 'SecondPageController',
      controllerUrl: 'second/second_page_controller'
    }))
    .otherwise({
      redirectTo: '/home'
    });
  });
  return angularAMD.bootstrap(app);
});
