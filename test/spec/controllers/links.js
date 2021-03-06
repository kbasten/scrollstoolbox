'use strict';

describe('Controller: LinksCtrl', function () {

  // load the controller's module
  beforeEach(module('scrollstoolboxApp'));

  var LinksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LinksCtrl = $controller('LinksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of link categories to the scope', function () {
    expect(typeof scope.links).toBe('object');
  });
});
