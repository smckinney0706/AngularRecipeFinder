


var app = angular.module('foodApp', []);
app.controller('foodCtrl', function($scope, $http){
	$scope.showFood = function(){
		$http.get("http://www.recipepuppy.com/api/?q=" + $("#searchRec").val())
		.then(function(response){
			$scope.food = response.data.results;
			// console.log($scope.food);
			$scope.thumbnail = response.data.results[0].thumbnail;
		});
	};
});