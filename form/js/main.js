// Create application
var myApp = angular.module('myApp', [])

// Bind controller myCtrl
myApp.controller('myCtrl', function($scope){
	$scope.user = {}
	$scope.submit = function() {
		alert('Name: ' + $scope.user.username + '   Email:' + $scope.user.email)
	}
})
