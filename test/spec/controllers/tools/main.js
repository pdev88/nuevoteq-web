'use strict';

describe('Controller: ToolsMainCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ToolsMainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsMainCtrl = $controller('ToolsMainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
