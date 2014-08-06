'use strict';

describe('Controller: ToolsDownloadsCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ToolsDownloadsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsDownloadsCtrl = $controller('ToolsDownloadsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
