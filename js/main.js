var app = angular.module('app', ['ngSanitize']);

app.controller('main',  function($scope,$http){
	$scope.Users = [
		{
			name:"",
			work:"",
			skills:[]
		}];
	//scope.i = 0;
	$scope.skill = "";
	$scope.level = "";
	$scope.nameses = ["Simon","Stiv","Goder","Kirill","Den","Carl","Meko","Dancer","Boltan","Goter"];
	$scope.workses = ["DEV","FronEnd","BackEnd","Sinior","Jun","Midle","Boss","Denes","Tark","vb"];
	$scope.skillses = ["cs","cpp","java","html","css","js","php","ja","jq","nj"];
	$scope.leveles = ["1","2","3","4","5","6","7","8","9","10"];

	//$scope.listWord = "<li><a href>mh</a></li>";


	/*$http({method: 'POST', url: 'post.php'}).
        then(function(response) {
          console.log(response.status);
        }, function(response) {
          console.log(response + "error");
      });*/


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

	$scope.AddUser = function(x){
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
			var req = {
					 method: 'POST',
					 url: 'post.php',
					 headers: {
					   'Content-Type': "application/json"
					 },
					 data: { user : $scope.Users[$scope.Users.length -1] },
					};
			$http(req)
				.then(function(data) {
					console.log(data);
				}, function(err) {
					console.log('error');
				});

			$scope.Users.push({
				name:"",
				work:"",
				skills:[]
			});
	}

	$scope.removeItem = function (x) {
        $scope.Users[x].skills.splice(x, 1);

    }
    $scope.res = "ИЛИ"
    $scope.toggle = function(){

    	if($scope.res == "ИЛИ"){
    		$scope.res = "И";
    	}
    	else{
    		$scope.res = "ИЛИ";
    	}

    }
})

