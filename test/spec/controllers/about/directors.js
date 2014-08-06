'use strict';

describe('Controller: AboutDirectorsCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutDirectorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutDirectorsCtrl = $controller('AboutDirectorsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
