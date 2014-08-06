'use strict';

describe('Controller: AboutWhatCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AboutWhatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutWhatCtrl = $controller('AboutWhatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
