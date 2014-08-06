'use strict';

describe('Controller: ServicesVendingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesVendingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesVendingCtrl = $controller('ServicesVendingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
