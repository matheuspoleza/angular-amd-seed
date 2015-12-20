define(['app', 'angularAMD', 'first/first_page_controller'], function (app, angularAMD) {

  describe('first controller', function () {
    var scope, controller;

    beforeEach(function(){
      angularAMD.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('FirstPageController', {
          $scope : scope
        });
      })
    });

    describe('on initialize', function(){
      it('should define app', function () {
        expect( app ).toBeDefined();
      });
      it('should have message on scope', function () {
        expect( scope.message ).toEqual('First Page');
      });
    });
  });
});
