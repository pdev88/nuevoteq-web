'use strict';

describe('Controller: AboutBbbeeCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutBbbeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutBbbeeCtrl = $controller('AboutBbbeeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
