'use strict';

describe('Controller: AboutSocioCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutSocioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutSocioCtrl = $controller('AboutSocioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
