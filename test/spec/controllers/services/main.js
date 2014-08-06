'use strict';

describe('Controller: ServicesMainCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesMainCtrl = $controller('ServicesMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
