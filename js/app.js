(function(){

  angular.module('productGuide',['ngRoute','ngAnimate'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/item/:itemId', {
          templateUrl: 'views/pdp.html',
          controller: 'pdpCtrl'
        })
        .when('/:n0?/:n1?/:n2?/:n3?/:n4?/:n5?/:n6?/:n7?/:n8?/:n9?/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  }])
  .controller('MainCtrl', function($scope, $http, $routeParams) {

    console.log('route parameters');
    console.log($routeParams);

    $scope.params = $routeParams;
    // $scope.productSelection = step.options;
    $scope.productSelection = [{"title":"Large Room"},{"title":"Medium Room"},{"title":"Small Room"}];
    $scope.prompt = step.question;

    n_params = Object.keys($scope.params).length;

    $scope.data = {};

    var results = {
      "question": {
        "options": [
            {
                "products": [],
                "answer": {},
                "step": {'question': {'text': '', 'options': []}},
                "text": "Cool my space"
            },
            {
                "products": [],
                "answer": {},
                "step": {'question': {'text': '', 'options': []}},
                "text": "Get rid of excess moisture"
            },
            {
                "text": "Both",
                "products": [],
                "answer": {},
                "step": {
                    "question": {
                        "text": "How humid is your space?",
                        "options": [
                            {
                                "text": "Moderately Damp - smell musty in humid weather",
                                "products": [],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "What size space are you looking to dehumidify?",
                                        "options": [
                                            {
                                                "products": [
                                                    "DEP301EW",
                                                    "DDR30A2GP",
                                                    "FAD301NWD"
                                                ],
                                                "answer": {},
                                                "step": {'question': {'text': '', 'options': []}},
                                                "text": "Small space - under 400 sq ft"
                                            },
                                            {
                                                "products": [
                                                    "DEP501EW",
                                                    "DDR50A2GP",
                                                    "DDR45A3GP"
                                                ],
                                                "answer": {},
                                                "step": {'question': {'text': '', 'options': []}},
                                                "text": "Medium Space - Up to 1000 sq ft"
                                            },
                                            {
                                                "products": [
                                                    "DEP701EW",
                                                    "DDR60A2GP",
                                                    "DDR70A2GP"
                                                ],
                                                "answer": {},
                                                "step": {'question': {'text': '', 'options': []}},
                                                "text": "Large space - 1000 sq ft +"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "products": [],
                                "answer": {},
                                "step": {'question': {'text': '', 'options': []}},
                                "text": "Damp - consistently smell musty"
                            },
                            {
                                "products": [],
                                "answer": {},
                                "step": {'question': {'text': '', 'options': []}},
                                "text": "Very Damp - Consistently musty and may have mold or moisture spots in areas"
                            }
                        ]
                    }
                }
            }
        ],
        "text": "Are you looking to cool your space or get rid of excess moisture?"
        }
    };

    var display_data = results.question;
    console.log(display_data);

    $scope.prompt = display_data.text;
    $scope.productSelection = display_data.options;
    
    if (n_params) {
      console.log('number of parameters: '+n_params);

      console.log($scope.params[('n'+(n_params-1))]);
      for(var i = 0; i < n_params; ++i) {
        console.log(i);
      }
    }




    $scope.getNextSet = function(o) {
      console.log(o);
      // $scope.productSelection = o.options;
      // $scope.prompt = o.question;
      
      if ("step.options" in o) {
        $scope.productSelection = o.options;
      }
      else {
        console.log('Nothing to show!');
      }
    };

  })
.controller('pdpCtrl', function($scope, $routeParams) {
  // console.log('this');
  console.log('hello');
    console.log($routeParams);

    $scope.params = $routeParams;
    // $scope.productSelection = step.options;
    $scope.productSelection = [{"title":"Large Room"},{"title":"Medium Room"},{"title":"Small Room"}];
    $scope.prompt = step.question;

    n = Object.keys($scope.params).length;

    console.log($scope.params[('n'+(n-1))]);

});

var step = {
  
};

})();