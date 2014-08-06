'use strict';

describe('Controller: ContactMainCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ContactMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactMainCtrl = $controller('ContactMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
