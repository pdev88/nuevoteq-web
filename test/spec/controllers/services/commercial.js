'use strict';

describe('Controller: ServicesCommercialCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesCommercialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesCommercialCtrl = $controller('ServicesCommercialCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
