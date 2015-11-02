// Create application
var myApp = angular.module('myApp', [])

// Bind controller myCtrl
myApp.controller('customersCtrl', function($scope, $http){
	$http.get('http://www.w3schools.com/angular/customers.php').then(function(request) {
		$scope.names = request.data.records
		console.log(request.data)
	})
})
