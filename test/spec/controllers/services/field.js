'use strict';

describe('Controller: ServicesFieldCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesFieldCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesFieldCtrl = $controller('ServicesFieldCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
