'use strict';

describe('Controller: ServicesAmiCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesAmiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesAmiCtrl = $controller('ServicesAmiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
