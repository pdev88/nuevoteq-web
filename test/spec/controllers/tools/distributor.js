'use strict';

describe('Controller: ToolsDistributorCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ToolsDistributorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsDistributorCtrl = $controller('ToolsDistributorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
