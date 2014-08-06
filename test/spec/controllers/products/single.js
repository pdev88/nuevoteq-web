'use strict';

describe('Controller: ProductsSingleCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProductsSingleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductsSingleCtrl = $controller('ProductsSingleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
