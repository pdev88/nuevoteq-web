'use strict';

describe('Controller: AboutMainCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutMainCtrl = $controller('AboutMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
