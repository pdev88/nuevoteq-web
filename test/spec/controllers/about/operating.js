'use strict';

describe('Controller: AboutOperatingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutOperatingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutOperatingCtrl = $controller('AboutOperatingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
