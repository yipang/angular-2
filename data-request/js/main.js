// Create application
var myApp = angular.module('myApp', [])

// Bind controller customersCtrl
myApp.controller('cutomersCtrl', function($scope, $http){
    $http.get('http://www.w3schools.com/angular/customers.php').then(function(response)) {
        $scope.name = response.data.records;
    }
})