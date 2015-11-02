define(['app', 'angularAMD', 'second/second_page_controller'], function (app, angularAMD) {

  describe('second controller', function () {
    var scope, controller;

    beforeEach(function(){
      angularAMD.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        controller = $controller('SecondPageController', {
          $scope : scope
        });
      })
    });

    describe('on initialize', function(){
      it('should define app', function () {
        expect( app ).toBeDefined();
      });
      it('should have message on scope', function () {
        expect( scope.message ).toEqual('Second Page');
      });
    });
  });
});
