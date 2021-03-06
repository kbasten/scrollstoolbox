'use strict';

angular.module('scrollstoolboxApp')
  .controller('AccountCtrl', function($scope, $location, user) {
	$scope.user = user.get();

	$scope.$watch('user.authed', function(){
		if (!$scope.user.authed) {
			$location.path('/');
		}
	});

	//copy over the email/ingame whenever it changes
	$scope.$watch('user.email',function() {
		$scope.emailEdited = $scope.user.email;
	});
	$scope.$watch('user.inGameName',function() {
		$scope.inGameNameEdited = $scope.user.inGameName;
	});

	$scope.$watch('user.settings.ownedColors.none + user.settings.ownedColors.missing + user.settings.ownedColors.playset + user.settings.ownedColors.extras + user.settings.rarityColors.common + user.settings.rarityColors.uncommon + user.settings.rarityColors.rare + user.settings.factionColors.order + user.settings.factionColors.growth + user.settings.factionColors.energy + user.settings.factionColors.decay', function(old,update) {
		if (old !== update) {
			user.updateSettings();
		}

	});

	$scope.edit = function(property) {
		$scope[property+'Editing'] = true;
	};

	$scope.close = function(property) {
		$scope[property+'Editing'] = false;
		$scope[property+'Edited'] = $scope.user[property];
	};

	$scope.save = function(property) {
		//we use the convention that the inputs have an ng-model of propertyEdited (eg. emailEdited)
		$scope.user[property] = $scope[property+'Edited'];
		user.update();
		$scope.close(property);
	};

	$scope.resetSettings = function() {
		user.resetSettings();
	};
});
