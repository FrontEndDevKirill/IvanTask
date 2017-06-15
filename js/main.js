var app = angular.module('app', []);

app.controller('MyBooks', function($scope){
		$scope.showbook = function(){
		console.log('ggg');
	}
});

app.controller('angularBookControler', function($scope){
	$scope.showbook = function(){
		console.log('fff');
	}
});

app.controller('emberBookctrl', function($scope){
	
});
