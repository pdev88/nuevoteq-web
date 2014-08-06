'use strict';

describe('Controller: ToolsToolsCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ToolsToolsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsToolsCtrl = $controller('ToolsToolsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
