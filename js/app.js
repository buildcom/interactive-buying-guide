(function() {

    angular.module('productGuide', ['ngRoute', 'ngAnimate'])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/:n0?/:n1?/:n2?/:n3?/:n4?/:n5?/:n6?/:n7?/:n8?/:n9?/', {
                        template: '<div class="row" ng-hide="items"> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <h2>{{question}}</h2> </div></div><div class="row" ng-hide="items"> <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 choiceSet" ng-repeat="o in productSelection"> <a ng-click="getNextSet(o, $index)"> <div class="thumbnail"> <img src="http://fillmurray.com/g/800/480" alt="" class="hidden-xs"> <div class="caption text-center"> <h3>{{o.text}}<br><small> Square Footage </small> </h3> <a class="btn btn-success btn-block choiceBtn" role="button" ng-click="getNextSet(o, $index)"> Select </a> </div></div></a> </div></div><div class="row" ng-show="items"> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <h2> These are the best products for you. </h2> </div></div><div class="row" ng-show="items"> <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 choiceSet" ng-repeat="item in itemSelection"> <a href="#"> <div class="thumbnail"> <img src="http://fillmurray.com/g/800/480" alt="" class="hidden-xs"> <div class="caption text-center"> <h3>{{item.sku}}<br><small> Item Description </small> </h3> <a class="btn btn-success btn-block choiceBtn" role="button" href=""> Add to Cart </a> <a class="btn btn-default btn-block choiceBtn" role="button" href=""> View Page </a> </div></div></a> </div></div>',
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
        "text": "Are you looking to cool your space or get rid of excess moisture?",
        "options": [
            {
                "text": "Cool my space",
                "products": [],
                "answer": {},
                "step": {
                    "question": {
                        "text": "Do you have the ability to permanently install or are you looking for an easy/less permanent cooling solution?",
                        "options": [
                            {
                                "text": "Permanent Installation",
                                "products": [],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "Are you looking to install your cooling solution on a wall or in a window?",
                                        "options": [
                                            {
                                                "text": "Wall",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "Do you want a through-the-wall air conditioner or a single or multi-zone remote split cooling system?",
                                                        "options": [
                                                            {
                                                                "text": "Through the wall AC",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "What size space are you looking to cool?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Small space - under 400 sq ft",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "LT0815CER",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "US08D10B",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "WS08D10",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "WTC8001W",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "FFTH0822R1",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "UE08D11C",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Medium Space - Up to 1000 sq ft",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "LT1215CER",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "LT1033CNR",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "FFTA1233Q2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "WTC12001W",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "FFTH1222R2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "LT1035HNR",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Large space - 1000 sq ft +",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "FRA144HT2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "US14D30B",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "WS15D30",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "FFTH1422R2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "WS16C30",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Single or Multi- Zone Split system",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "How many zones or areas are you looking to cool?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Single Zone",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "M24CJ",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "M18CJ",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "M12CJ",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "LS240HSV3",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "LS307HV3",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "BR1224W3A",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Dual Zone",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "PMD243HDX",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "MR36MW18X2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "SENA18HFIX2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Triple Zone",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "PMD303HTX",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "MR36MW12X3",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "SENA09HFIX3",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Window",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "What size space are you looking to cool?",
                                                        "options": [
                                                            {
                                                                "text": "Small space - under 400 sq ft",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "Would you like a heat function included?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Cool only",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "LW8015ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "CP08G10A",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRE0833Q1",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Cool and Heat",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "WAC8001W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW8015HR",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRH0822R1",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Medium Space - Up to 1000 sq ft",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "Would you like a heat function included?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Cool only",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "LW1215ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1015ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "CP12G10A",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Cool and Heat",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "WAC12001W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1215HR",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRH1222R2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Large space - 1000 sq ft +",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "Would you like a heat function included?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Cool only",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "EP18G33B",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "CP24G30A",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1815ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Cool and Heat",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "WAC18001W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRH2522R2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1815HR",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "text": "Non-Permanent or Portable Installation ",
                                "products": [],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "What size space are you looking to cool?",
                                        "options": [
                                            {
                                                "text": "Small space - under 400 sq ft",
                                                "products": [
                                                    {
                                                        "sku": "AP8000W",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "PAC801W",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "AP10002BL",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "",
                                                        "options": []
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Medium Space - Up to 1000 sq ft",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "Would you like a heat function included?",
                                                        "options": [
                                                            {
                                                                "text": "Cool only",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP12000S",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "PAC1201W",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "APAC120S",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Cool and Heat",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP12000HS",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "DPA120HB1WDB",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Large space - 1000 sq ft +",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "Would you like a heat function included?",
                                                        "options": [
                                                            {
                                                                "text": "Cool only",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP14003W",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "PAC1401W",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "APAC140C",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Cool and Heat",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP14001HS",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "APAC140HC",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "P14B",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            {
                "text": "Get rid of excess moisture",
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
                                                "text": "Small space - under 400 sq ft",
                                                "products": [
                                                    {
                                                        "sku": "DEP301EW",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR30A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "FAD301NWD",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "",
                                                        "options": []
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Medium Space - Up to 1000 sq ft",
                                                "products": [
                                                    {
                                                        "sku": "DEP501EW",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR50A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR45A3GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "",
                                                        "options": []
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Large space - 1000 sq ft +",
                                                "products": [
                                                    {
                                                        "sku": "DEP701EW",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR60A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR70A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "",
                                                        "options": []
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "text": "Damp - consistently smell musty",
                                "products": [],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "What size space are you looking to dehumidify?",
                                        "options": [
                                            {
                                                "text": "Small - Medium Space - Up to 1000 sq ft",
                                                "products": [
                                                    {
                                                        "sku": "DEP501EW",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR50A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR45A3GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "step": {}
                                            },
                                            {
                                                "text": "Large space - 1000 sq ft +",
                                                "products": [
                                                    {
                                                        "sku": "DEP701EW",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR60A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "DDR70A2GP",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "step": {}
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "text": "Very Damp - Consistently musty and may have mold or moisture spots in areas",
                                "products": [
                                    {
                                        "sku": "DEP701EW",
                                        "description": "",
                                        "link": "",
                                        "img": "",
                                        "name": ""
                                    },
                                    {
                                        "sku": "DDR60A2GP",
                                        "description": "",
                                        "link": "",
                                        "img": "",
                                        "name": ""
                                    },
                                    {
                                        "sku": "DDR70A2GP",
                                        "description": "",
                                        "link": "",
                                        "img": "",
                                        "name": ""
                                    }
                                ],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "",
                                        "options": []
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            {
                "text": "Both",
                "products": [],
                "answer": {},
                "step": {
                    "question": {
                        "text": "Do you have the ability to permanently install or are you looking for an easy/less permanent cooling solution?",
                        "options": [
                            {
                                "text": "Permanent Installation",
                                "products": [],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "Are you looking to install your cooling solution on a wall or in a window?",
                                        "options": [
                                            {
                                                "text": "Wall",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "Do you want a through-the-wall air conditioner or a single or multi-zone remote split cooling system?",
                                                        "options": [
                                                            {
                                                                "text": "Through the wall AC",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "What size space are you looking to cool?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Small space - under 400 sq ft",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "AP8000W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "PAC801W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "AP10002BL",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Medium Space - Up to 1000 sq ft",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "LT1215CER",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "LT1033CNR",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "FFTA1233Q2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "WTC12001W",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "FFTH1222R2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "LT1035HNR",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Large space - 1000 sq ft +",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "FRA144HT2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "US14D30B",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "WS15D30",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "FFTH1422R2",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "WS16C30",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Single or Multi- Zone Split system",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "How many zones or areas are you looking to cool?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Single Zone",
                                                                                "products": [],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "Would you like a heat function included?",
                                                                                        "options": [
                                                                                            {
                                                                                                "text": "Cool only",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "M24CJ",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "M18CJ",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "M12CJ",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "text": "Cool and Heat",
                                                                                                "products": [
                                                                                                    {
                                                                                                        "sku": "LS240HSV3",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "LS307HV3",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    },
                                                                                                    {
                                                                                                        "sku": "BR1224W3A",
                                                                                                        "description": "",
                                                                                                        "link": "",
                                                                                                        "img": "",
                                                                                                        "name": ""
                                                                                                    }
                                                                                                ],
                                                                                                "answer": {},
                                                                                                "step": {
                                                                                                    "question": {
                                                                                                        "text": "",
                                                                                                        "options": []
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Dual Zone",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "PMD243HDX",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "MR36MW18X2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "SENA18HFIX2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Triple Zone",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "PMD303HTX",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "MR36MW12X3",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "SENA09HFIX3",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Window",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "What size space are you looking to cool?",
                                                        "options": [
                                                            {
                                                                "text": "Small space - under 400 sq ft",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "Would you like a heat function included?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Cool only",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "LW8015ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "CP08G10A",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRE0833Q1",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Cool and Heat",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "WAC8001W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW8015HR",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRH0822R1",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Medium Space - Up to 1000 sq ft",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "Would you like a heat function included?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Cool only",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "LW1215ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1015ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "CP12G10A",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Cool and Heat",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "WAC12001W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1215HR",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRH1222R2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Large space - 1000 sq ft +",
                                                                "products": [],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "Would you like a heat function included?",
                                                                        "options": [
                                                                            {
                                                                                "text": "Cool only",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "EP18G33B",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "CP24G30A",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1815ER",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            },
                                                                            {
                                                                                "text": "Cool and Heat",
                                                                                "products": [
                                                                                    {
                                                                                        "sku": "WAC18001W",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "FFRH2522R2",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    },
                                                                                    {
                                                                                        "sku": "LW1815HR",
                                                                                        "description": "",
                                                                                        "link": "",
                                                                                        "img": "",
                                                                                        "name": ""
                                                                                    }
                                                                                ],
                                                                                "answer": {},
                                                                                "step": {
                                                                                    "question": {
                                                                                        "text": "",
                                                                                        "options": []
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                "text": "Non-Permanent or Portable Installation ",
                                "products": [],
                                "answer": {},
                                "step": {
                                    "question": {
                                        "text": "What size space are you looking to cool?",
                                        "options": [
                                            {
                                                "text": "Small space - under 400 sq ft",
                                                "products": [
                                                    {
                                                        "sku": "AP8000W",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "PAC801W",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    },
                                                    {
                                                        "sku": "AP10002BL",
                                                        "description": "",
                                                        "link": "",
                                                        "img": "",
                                                        "name": ""
                                                    }
                                                ],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "",
                                                        "options": []
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Medium Space - Up to 1000 sq ft",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "Would you like a heat function included?",
                                                        "options": [
                                                            {
                                                                "text": "Cool only",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP12000S",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "PAC1201W",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "APAC120S",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Cool and Heat",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP12000HS",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "DPA120HB1WDB",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            },
                                            {
                                                "text": "Large space - 1000 sq ft +",
                                                "products": [],
                                                "answer": {},
                                                "step": {
                                                    "question": {
                                                        "text": "Would you like a heat function included?",
                                                        "options": [
                                                            {
                                                                "text": "Cool only",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP14003W",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "PAC1401W",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "APAC140C",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            },
                                                            {
                                                                "text": "Cool and Heat",
                                                                "products": [
                                                                    {
                                                                        "sku": "AP14001HS",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "APAC140HC",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    },
                                                                    {
                                                                        "sku": "P14B",
                                                                        "description": "",
                                                                        "link": "",
                                                                        "img": "",
                                                                        "name": ""
                                                                    }
                                                                ],
                                                                "answer": {},
                                                                "step": {
                                                                    "question": {
                                                                        "text": "",
                                                                        "options": []
                                                                    }
                                                                }
                                                            }
                                                        ]
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        ]
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