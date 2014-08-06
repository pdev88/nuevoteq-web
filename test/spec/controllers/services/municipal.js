'use strict';

describe('Controller: ServicesMunicipalCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesMunicipalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesMunicipalCtrl = $controller('ServicesMunicipalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
