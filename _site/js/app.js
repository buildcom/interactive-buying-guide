(function(){

	angular.module('productGuide',['ngRoute','ngAnimate'])
	.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/item/:itemId', {
          templateUrl: 'views/pdp.html',
          controller: 'pdpCtrl'
        })
        .when('/?:choiceid', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  }])
  .controller('MainCtrl', function($scope, $http, $routeParams) {

  	console.log('hello');
  	console.log($routeParams);

  	$scope.params = $routeParams;
  	$scope.productSelection = step.options;
		$scope.prompt = step.question;

		$scope.getNextSet = function(o) {
			console.log(o);
			$scope.productSelection = o.options;
			$scope.prompt = o.question;
			
	  	//if ("step.options" in o) {
	  		//$scope.productSelection = o.options;
	  	//}
	  	//else {
	  		///console.log('Nothing to show!');
	  	//}
    };

  })
.controller('pdpCtrl', function($scope, $routeParams) {
  // console.log('this');
  $scope.params = $routeParams;
  console.log($scope.params);
});

var step = {
  "question": "Question #1",
  "options": [
    {
      "title": "1",
      "step": {
        "question": "Q 1.1",
        "options": [
          {
            "title": "1.1",
            "step": {
              "question": "Q 1.1",
              "options": []
            }
          }
        ]
      }
    },
    {
      "title": "2",
      "step": {
        "question": "Q 2.2",
        "options": [
          {
            "title": "1",
            "step": {
              "question": "Q 2.3",
              "options": [
                {
                  "title": "1.1",
                  "step": {
                    "question": "Q 1.1",
                    "options": []
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      "title": "3",
      "step": {
        "question": "Q 1.2",
        "options": []
      }
    }
  ]
};

})();