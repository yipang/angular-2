// Create application
var myApp = angular.module('myApp', []);

// Bind controller madCtrl
myApp.controller('madCtrl', function($scope) {

// Set initial values for name, age, location, and food
	$scope.name = "Laura";
	$scope.age = 62;
	$scope.location = "Ohio";
	$scope.food = 'Peanut Butter & Jelly';
});