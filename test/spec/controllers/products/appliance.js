'use strict';

describe('Controller: ProductsApplianceCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsApplianceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsApplianceCtrl = $controller('ProductsApplianceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
