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
			alert("Не все поля заполнены");
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

	$scope.AddUser = function(){
		if ($scope.name == "" || $scope.Prof == "") {
			alert("Не все поля заполнены");
		}
		else{
			$scope.Users[$scope.Users.length-1].name = $scope.name;
			$scope.Users[$scope.Users.length-1].work = $scope.Prof;
			$scope.name = "";
			$scope.Prof = "";
			$scope.skill = "";
			$scope.level = "";
			$scope.Users.push({
				name:"",
				work:"",
				skills:[]
			});
		}
	}

	$scope.AddRandomUser = function () {
		
	}

})

