(function() {

    angular.module('productGuide', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/:n0?/:n1?/:n2?/:n3?/:n4?/:n5?/:n6?/:n7?/:n8?/:n9?/', {
                        templateUrl: '../main.html',
                        controller: 'MainCtrl'
                    });
            }
        ])
        .controller('MainCtrl', function($scope, $http, $routeParams, $location) {

            $scope.itemSelection = [];
            $scope.items = false;


            // traverses the json tree
            $scope.getNextSet = function(o, index) {
                // if no items, there are more questions to be asked
                console.log('get next set');
                console.log(o);

                if (o.nodes[0].type=='question' || o.nodes[0].type=='answer') {
                    $scope.items = false;
                    $location.path($location.path() + (index +1)+ '/');
                }
                else {
                    console.log('product nodes');
                    $scope.items = true;
                    $location.path($location.path() + (index +1)+ '?items=true');
                    $scope.itemSelection = o.nodes;
                }
            };

            $scope.params = $routeParams;

            var results = [
              {
                "type": "question",
                "text": "Question 1",
                "nodes": [
                  {
                    "nodes": [
                      {
                        "nodes": [
                          {
                            "nodes": [],
                            "type": "answer",
                            "text": "New Answer",
                            "img": "Image URL"
                          },
                          {
                            "nodes": [],
                            "type": "answer",
                            "text": "New Answer",
                            "img": "Image URL"
                          },
                          {
                            "nodes": [],
                            "type": "answer",
                            "text": "New Answer",
                            "img": "Image URL"
                          }
                        ],
                        "type": "question",
                        "text": "q2"
                      }
                    ],
                    "type": "answer",
                    "text": "Answer 1",
                    "img": "Image URL"
                  },
                  {
                    "nodes": [
                      {
                        "type": "product",
                        "sku": "b",
                        "name": "a",
                        "link": "c",
                        "img": "d",
                        "price": "e"
                      },
                      {
                        "type": "product",
                        "sku": "B",
                        "name": "A",
                        "link": "C",
                        "img": "D",
                        "price": "E"
                      }
                    ],
                    "type": "answer",
                    "text": "Answer 2",
                    "img": "aoeu"
                  },
                  {
                    "nodes": [],
                    "type": "answer",
                    "text": "Answer 3",
                    "img": "Image URL"
                  }
                ]
              }
            ];





            var display_data = results[0];
            $scope.question = display_data.text;
            $scope.productSelection = display_data.nodes;


            n_params = Object.keys($scope.params).length;

            console.log("number of params");
            console.log(n_params);

            // this means navigate tree
            if (n_params) {
                console.log("there are params");
                results = results[0];

                console.log(results);

                for (var i = 1; i < n_params + 1; ++i) {
                    if( i == n_params) {
                        var pars = $scope.params['n'+(n_params-1)].split("?");
                        // 3?item = true on the last variable to look at items
                        if(pars.length > 1) {
                            $scope.items = true;
                            tmp_index = 'n' + (n_params-1);
                            $scope.itemSelection = results.nodes[parseInt(pars[0]) - 1].nodes;
                        }
                        else {
                            results = results.nodes[$scope.params[('n' + (i -1 ))] - 1];
                            $scope.items = false;
                        }
                    }
                    // last variable not
                    else {
                        results = results.nodes[$scope.params[('n' + (i - 1))] - 1];
                        $scope.items = false;
                    }       
                }
                // reset variables
                if (!$scope.items) {
                    $scope.question = results.text;
                    $scope.productSelection = results.nodes;    
                }
            }
        });
})();