var app = angular.module('app', []);

app.controller('main',  function($scope){
	$scope.Users = [
		{
			name:"",
			work:"",
			skills:[]
		}
	];
	//scope.i = 0;
	$scope.skill = "";
	$scope.level = "";


	$scope.AddSkills = function() {
		if ($scope.skill == "" || $scope.level == "") {
			console.log("Не все поля заполнены");
		}
		else{
			$scope.Users[$scope.Users.length - 1].skills.push({
				title: $scope.skill,
				level: $scope.level
			});
			$scope.skill = "";
			$scope.level = "";
		}
	}

})

