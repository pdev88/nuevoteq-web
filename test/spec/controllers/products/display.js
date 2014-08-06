'use strict';

describe('Controller: ProductsDisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsDisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsDisplayCtrl = $controller('ProductsDisplayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
