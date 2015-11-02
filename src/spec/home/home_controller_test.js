define(['app', 'angularAMD', 'home/home_controller'], function (app, angularAMD) {

  describe('home controller', function () {
    var scope, controller;

    beforeEach(function(){
      angularAMD.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('HomeController', {
          $scope : scope
        });
      })
    });

    describe('on initialize', function(){
      it('should define app', function () {
        expect( app ).toBeDefined();
      });
      it('should have message on scope', function () {
        expect( scope.message ).toEqual('Home Page');
      });
    });
  });
});
