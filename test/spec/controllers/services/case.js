'use strict';

describe('Controller: ServicesCaseCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ServicesCaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesCaseCtrl = $controller('ServicesCaseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
