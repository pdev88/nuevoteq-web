'use strict';

describe('Controller: ProductsMainCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsMainCtrl = $controller('ProductsMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
