'use strict';

describe('Controller: ProductsWaterCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsWaterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsWaterCtrl = $controller('ProductsWaterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
