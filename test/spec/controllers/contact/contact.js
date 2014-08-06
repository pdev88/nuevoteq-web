'use strict';

describe('Controller: ContactContactCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ContactContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactContactCtrl = $controller('ContactContactCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
