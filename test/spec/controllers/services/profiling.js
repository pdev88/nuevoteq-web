'use strict';

describe('Controller: ServicesProfilingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesProfilingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesProfilingCtrl = $controller('ServicesProfilingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
