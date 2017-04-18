


var app = angular.module('foodApp', []);
app.controller('foodCtrl', function($scope, $http){

	$("#pageContain").hide();

	$scope.showFood = function(){
		$("#pageContain").show();
		$http.get("http://www.recipepuppy.com/api/?i=" + $("#searchIng").val() + "&q=" + $("#searchRec").val() + "&onlyImages=1")
		.then(function(response, status){
			$scope.food = response.data.results;
			angular.forEach($scope.food, function(value,key){
				value.title = value.title.replace('&amp;', '&');
			});
			// alert(response.status);
			// console.log( response.data.results[0].ingredients );
			//$scope.thumbnail = response.data.results[0].thumbnail;
		});
	};

	$scope.changePage1 = function(){
		$http.get("http://www.recipepuppy.com/api/?i=" + $("#searchIng").val() + "&q=" + $("#searchRec").val() + "&onlyImages=1" + "&p=1")
		.then(function(response, status){
			$scope.food = response.data.results;
			angular.forEach($scope.food, function(value,key){
				value.title = value.title.replace('&amp;', '&');
			});
			// alert(response.status);
			// console.log( response.data.results[0].ingredients );
			//$scope.thumbnail = response.data.results[0].thumbnail;
		});
	};


	$scope.changePage2 = function(){
		$http.get("http://www.recipepuppy.com/api/?i=" + $("#searchIng").val() + "&q=" + $("#searchRec").val() + "&onlyImages=1" + "&p=2")
		.then(function(response, status){
			$scope.food = response.data.results;
			angular.forEach($scope.food, function(value,key){
				value.title = value.title.replace('&amp;', '&');
			});
			// alert(response.status);
			// console.log( response.data.results[0].ingredients );
			//$scope.thumbnail = response.data.results[0].thumbnail;
		});

	};

	
	// $scope.removeAnds = function(){
	// 	$("h2").each(function() {
	// 		var text = $(this).text();
	// 		$(this).text(text.replace('&amp;','&'));
	// 	});
	// };
});