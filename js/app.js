(function() {

    angular.module('productGuide', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/:n0?/:n1?/:n2?/:n3?/:n4?/:n5?/:n6?/:n7?/:n8?/:n9?/', {
                        templateUrl: 'views/main.html',
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
                if (o.products.length == 0) {
                    $scope.items = false;
                    $location.path($location.path() + (index +1)+ '/');
                }
                else {

                    $scope.items = true;
                    $location.path($location.path() + (index +1)+ '?items=true');
                    $scope.itemSelection = o.products;
                }
            };

            $scope.params = $routeParams;

            var results = {
                "question": {
                    "options": [{
                        "products": [],
                        "answer": {},
                        "step": {
                            'question': {
                                'text': '',
                                'options': []
                            }
                        },
                        "text": "Cool my space"
                    }, {
                        "products": [],
                        "answer": {},
                        "step": {
                            'question': {
                                'text': '',
                                'options': []
                            }
                        },
                        "text": "Get rid of excess moisture"
                    }, {
                        "text": "Both",
                        "products": [],
                        "answer": {},
                        "step": {
                            "question": {
                                "text": "How humid is your space?",
                                "options": [{
                                    "text": "Moderately Damp - smell musty in humid weather",
                                    "products": [],
                                    "answer": {},
                                    "step": {
                                        "question": {
                                            "text": "What size space are you looking to dehumidify?",
                                            "options": [{
                                                "products": [
                                                    {"sku":"DEP301EW", "description":"", "link":"", "img":"", "name":""},
                                                    {"sku":"DDR30A2GP", "description":"", "link":"", "img":"", "name":""},
                                                    {"sku":"FAD301NWD", "description":"", "link":"", "img":"", "name":""}
                                                ],
                                                "answer": {},
                                                "step": {
                                                    'question': {
                                                        'text': '',
                                                        'options': []
                                                    }
                                                },
                                                "text": "Small space - under 400 sq ft"
                                            }, {
                                                "products": [
                                                    "DEP501EW",
                                                    "DDR50A2GP",
                                                    "DDR45A3GP"
                                                ],
                                                "answer": {},
                                                "step": {
                                                    'question': {
                                                        'text': '',
                                                        'options': []
                                                    }
                                                },
                                                "text": "Medium Space - Up to 1000 sq ft"
                                            }, {
                                                "products": [
                                                    {"sku":"DEP701EW", "description":"", "link":"", "img":"", "name":""},
                                                    {"sku":"DDR60A2GP", "description":"", "link":"", "img":"", "name":""},
                                                    {"sku":"DDR70A2GP", "description":"", "link":"", "img":"", "name":""}
                                                ],


                                                "answer": {},
                                                "step": {
                                                    'question': {
                                                        'text': '',
                                                        'options': []
                                                    }
                                                },
                                                "text": "Large space - 1000 sq ft +"
                                            }]
                                        }
                                    }
                                }, {
                                    "products": [],
                                    "answer": {},
                                    "step": {
                                        'question': {
                                            'text': '',
                                            'options': []
                                        }
                                    },
                                    "text": "Damp - consistently smell musty"
                                }, {
                                    "products": [],
                                    "answer": {},
                                    "step": {
                                        'question': {
                                            'text': '',
                                            'options': []
                                        }
                                    },
                                    "text": "Very Damp - Consistently musty and may have mold or moisture spots in areas"
                                }]
                            }
                        }
                    }],
                    "text": "Are you looking to cool your space or get rid of excess moisture?"
                }
            };

            var display_data = results.question;
            $scope.question = display_data.text;
            $scope.productSelection = display_data.options;

            n_params = Object.keys($scope.params).length;

            // this means navigate tree
            if (n_params) {
                results = results.question;

                for (var i = 1; i < n_params + 1; ++i) {
                    if( i == n_params) {
                        var pars = $scope.params['n'+(n_params-1)].split("?");
                        // 3?item = true on the last variable to look at items
                        if(pars.length > 1) {
                            $scope.items = true;
                            tmp_index = 'n' + (n_params-1);
                            $scope.itemSelection = results.options[parseInt(pars[0]) - 1].products;
                        }
                        else {
                            results = results.options[$scope.params[('n' + (i -1 ))] - 1].step.question;
                            $scope.items = false;
                        }
                    }
                    // last variable not
                    else {
                        results = results.options[$scope.params[('n' + (i - 1))] - 1].step.question;
                        $scope.items = false;
                    }       
                }
                // reset variables
                if (!$scope.items) {
                    $scope.question = results.text;
                    $scope.productSelection = results.options;    
                }
            }
        });
})();