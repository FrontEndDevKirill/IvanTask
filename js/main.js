var app = angular.module('app', []);

app.controller('First',  function($scope , myfectory){
	console.log("First");
	$scope.myfectory = myfectory;
	$scope.hello = "Hello World 1";
});

app.controller('Second',  function($scope , myfectory){
	$scope.myfectory = myfectory;
	console.log("Second");
	$scope.hello = "Hello World 2";
});

app.factory('myfectory',  function(){
	return{
		hello: 'Hello World'
	}
})