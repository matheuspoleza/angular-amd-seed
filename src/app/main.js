require.config({
  baseUrl: "src/app",
  paths: {
      'angular': '../libs/angular/angular',
      'angular-route': '../libs/angular-route/angular-route',
      'angularAMD': '../libs/angularAMD/angularAMD'
  },
  shim: {
    'angularAMD': ['angular'],
    'angular-route': ['angular']
  },
  deps: ['app']
});
