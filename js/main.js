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

	$scope.nameses = ["Simon","Stiv","Goder","Kirill","Den","Carl","Meko","Dancer","Boltan","Goter"];
	$scope.workses = ["DEV","FronEnd","BackEnd","Sinior","Jun","Midle","Boss","Denes","Tark","vb"];
	$scope.skillses = ["cs","cpp","java","html","css","js","php","ja","jq","nj"];
	$scope.leveles = ["1","2","3","4","5","6","7","8","9","10"];



	$scope.getRandomNum = function(){
	  return Math.floor((Math.random()*6)+0);
	}
	$scope.rand = $scope.getRandomNum();

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
		$scope.rand = $scope.getRandomNum();
		$scope.Users[$scope.Users.length - 1].name = $scope.nameses[$scope.getRandomNum()];
		$scope.Users[$scope.Users.length - 1].work = $scope.workses[$scope.getRandomNum()];
		for (var i = 0; i < $scope.rand+1; i++) {
			$scope.Users[$scope.Users.length - 1].skills.push({
				title: $scope.skillses[$scope.getRandomNum()],
				level: $scope.leveles[$scope.getRandomNum()]
			});
		}


			$scope.Users.push({
				name:"",
				work:"",
				skills:[]
			});
	}
	$scope.removeItem = function (x) {
        $scope.Users[0].skill.splice(x, 1);
    }

})

