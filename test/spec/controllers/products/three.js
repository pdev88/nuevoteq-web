'use strict';

describe('Controller: ProductsThreeCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsThreeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsThreeCtrl = $controller('ProductsThreeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
