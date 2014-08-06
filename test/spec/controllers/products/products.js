'use strict';

describe('Controller: ProductsProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsProductsCtrl = $controller('ProductsProductsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
