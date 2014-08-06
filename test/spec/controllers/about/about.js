'use strict';

describe('Controller: AboutAboutCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutAboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutAboutCtrl = $controller('AboutAboutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
