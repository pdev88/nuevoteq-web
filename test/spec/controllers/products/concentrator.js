'use strict';

describe('Controller: ProductsConcentratorCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsConcentratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsConcentratorCtrl = $controller('ProductsConcentratorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
