(function() {

angular.module('productGuide', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/:n0?/:n1?/:n2?/:n3?/:n4?/:n5?/:n6?/:n7?/:n8?/:n9?/', {
          template: '<div class="panel panel-default ng-scope" ng-hide="items"><div class="panel-heading"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="ld-noUnderline">{{question}}</h2><div ng-hide="first" ng-click="goBack()" class="btn ld-btn-defaultCta backBtn pull-right"><i class="fa fa-chevron-left"></i> Go Back</div></div></div><div class="panel-body"><div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 choiceSet" ng-class="{\'col-md-offset-2 col-lg-offset-2\':{{$first&&productSelection.length==2}}}" ng-repeat="o in productSelection"><a ng-click="getNextSet(o, $index)"><div class="thumbnail"><img class="hidden-xs" src="{{o.img}}"><div class="caption text-center"><div class="btn btn-lg btn-block ld-btn-primaryCta choiceBtn" ng-click="getNextSet(o, $index)">{{o.text | limitTo: 30}}{{o.text.length > 30 ? "..." : ""}}</div></div></div></a></div></div></div><div class="panel panel-default ng-scope" ng-show="items"><div class="panel-heading"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h2 class="ld-noUnderline"> Based upon your selection, we have found these products for you: </h2></div></div><div class="panel-body"><div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 choiceSet ng-scope" ng-class="{\'col-md-offset-2 col-lg-offset-2\':{{$first&&productSelection.length==2}}}" ng-repeat="item in itemSelection"><a href="{{item.link}}"><div class="thumbnail"><img class="hidden-xs" src="{{item.img}}"><div class="caption text-center"><div class="btn btn-lg btn-block ld-btn-primaryCta choiceBtn">{{item.name | limitTo: 30}}{{item.name.length > 30 ? "..." : ""}}</div></div></div></a></div></div></div>',
          controller: 'MainCtrl'
        });
  }
  ])
  .controller('MainCtrl', function($scope, $http, $routeParams, $location) {
      $scope.itemSelection = [];
      $scope.items = false;
      $scope.first = true;

      // traverses the json tree
      $scope.getNextSet = function(o, index) {
        // if no items, there are more questions to be asked
        if (o.nodes[0].type=='question' || o.nodes[0].type=='answer') {
          $scope.items = false;
          $location.path($location.path() + (index +1)+ '/');
        }
        else {
          $scope.items = true;
          $location.path($location.path() + (index +1)+ '?items=true');
          $scope.itemSelection = o.nodes;
        }
      };

      $scope.goBack = function() {
        var p = $location.path().split('/');
        p.pop(0);
        p.pop(p.length-1);

        var n = $location.path().lastIndexOf("/");

        if(n>1) {
          var tmp = $location.path().substring(0,n);
          tmp = tmp.substring(0, tmp.lastIndexOf('/')) + '/';
          $location.path(tmp);
        }
      };

      $scope.getProductData = function(product) {
        var sku = product.sku;
        var url = "/on/demandware.store/Sites-Appliance-Site/default/Include-ProductCard";

        console.log('${URLUtils.url("Include-ProductCard")}');

        $http.get(url + "?ProductID="+ sku)
        .then(function(data, status, headers, config) {
          console.log(data);
          product.link = "";
          product.name = "";
          product.price = "";
        });
      };

      $scope.params = $routeParams;

      var results = [ {
          "type": "question",
          "text": "Are you looking to cool your space or get rid of excess moisture?",
          "nodes": [
            {
              "nodes": [
                {
                  "nodes": [
                    {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                {
                                  "nodes": [
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "LT0815CER",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "US08D10B",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "WS08D10",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "WTC8001W",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTH0822R1",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "UE08D11C",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Small Space - 400 sq ft or less",
                                              "img": "Global_Assets/super-cat/ac/portable-air-conditioner-small-room.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "LT1215CER",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "LT1033CNR",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTA1233Q2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "WTC12001W",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTH1222R2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "LT1035HNR",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Medium Space - Up to 1000 sq ft or less",
                                              "img": "Global_Assets/super-cat/ac/portable-air-conditioner-medium-room.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "FRA144HT2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "US14D30B",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "WS15D30",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTH1422R2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "WS16C30",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Large Space - 1000+ sq ft",
                                              "img": "Global_Assets/super-cat/ac/portable-air-conditioner-large-room.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "What size space are you cooling?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Through the wall AC",
                                      "img": "Global_Assets/super-cat/ac/through-the-wall-unit-v1.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "M24CJ",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "M18CJ",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "M12CJ",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool Only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "LS240HSV3",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "LS307HV3",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "BR1224W3A",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and Heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function as well?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Single Zone",
                                              "img": "Global_Assets/super-cat/ac/single-zone.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "PMD243HDX",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "MR36MW18X2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "SENA18HFIX2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Dual Zone",
                                              "img": "Global_Assets/super-cat/ac/dual-zone.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "PMD303HTX",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "MR36MW12X3",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "SENA09HFIX3",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Triple Zone",
                                              "img": "Global_Assets/super-cat/ac/triple-zone.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "How many areas/zones are you looking to cool?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Single or multi-zone split AC",
                                      "img": "Global_Assets/super-cat/ac/single-or-multi-zone.jpg?$staticlink$"
                                    }
                                  ],
                                  "type": "question",
                                  "text": "Do you want a through the wall air conditioner or a single or multi-zone remote split cooling system?"
                                }
                              ],
                              "type": "answer",
                              "text": "Wall",
                              "img": "Global_Assets/super-cat/ac/through-the-wall-unit-v2.jpg?$staticlink$"
                            },
                            {
                              "nodes": [
                                {
                                  "nodes": [
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "LW8015ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "CP08G10A",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRE0833Q1",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "WAC8001W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW8015HR",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRH0822R1",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Small Space 400 sq ft or less",
                                      "img": "Global_Assets/super-cat/ac/window-air-conditioner-small-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "LW1215ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1015ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "CP12G10A",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "WAC12001W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1215HR",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRH1222R2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Medium Space - 400 - 1000 sq ft",
                                      "img": "Global_Assets/super-cat/ac/window-air-conditioner-medium-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "EP18G33B",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "CP24G30A",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1815ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "WAC18001W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRH2522R2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1815HR",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Large Space - 1000+ sq ft",
                                      "img": "Global_Assets/super-cat/ac/window-air-conditioner-large-room.jpg?$staticlink$"
                                    }
                                  ],
                                  "type": "question",
                                  "text": "What size space are you looking to cool?"
                                }
                              ],
                              "type": "answer",
                              "text": "Window",
                              "img": "Global_Assets/super-cat/ac/window-install.jpg?$staticlink$"
                            }
                          ],
                          "type": "question",
                          "text": "Are you looking to install you cooling solution on your wall or in your window?"
                        }
                      ],
                      "type": "answer",
                      "text": "Permanent installation",
                      "img": "Global_Assets/super-cat/ac/permanent-install.jpg?$staticlink$"
                    },
                    {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                {
                                  "nodes": [
                                    {
                                      "nodes": [
                                        {
                                          "type": "product",
                                          "sku": "AP8000W",
                                          "name": "name",
                                          "link": "link",
                                          "img": "image",
                                          "price": "price"
                                        },
                                        {
                                          "type": "product",
                                          "sku": "PAC801W",
                                          "name": "name",
                                          "link": "link",
                                          "img": "image",
                                          "price": "price"
                                        },
                                        {
                                          "type": "product",
                                          "sku": "AP10002BL",
                                          "name": "name",
                                          "link": "link",
                                          "img": "image",
                                          "price": "price"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Small - Under 350 sq ft",
                                      "img": "Global_Assets/super-cat/ac/portable-air-conditioner-small-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP12000S",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "PAC1201W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "APAC120S",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP12000HS",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "DPA120HB1WDB",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "AP14001HS",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Medium  Up to 450 sq ft",
                                      "img": "Global_Assets/super-cat/ac/portable-air-conditioner-medium-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP14003W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "PAC1401W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "APAC140C",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP14001HS",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "APAC140HC",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "P14B",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Large - up to 600 sq ft",
                                      "img": "Global_Assets/super-cat/ac/portable-air-conditioner-large-room.jpg?$staticlink$"
                                    }
                                  ],
                                  "type": "question",
                                  "text": "What size area are you looking to cool?"
                                }
                              ],
                              "type": "answer",
                              "text": "I have the ability to vent",
                              "img": "Global_Assets/super-cat/ac/ability-to-vent.jpg?$staticlink$"
                            },
                            {
                              "nodes": [
                                {
                                  "type": "product",
                                  "sku": "EAC211TS",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "EAC421",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "SF-610",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                }
                              ],
                              "type": "answer",
                              "text": "I do not have the ability to vent",
                              "img": "Global_Assets/super-cat/ac/no-place-to-vent.jpg?$staticlink$"
                            }
                          ],
                          "type": "question",
                          "text": "Do you have a place to vent out hot air from the room you are trying to cool such as a window, doorway or drop ceiling?"
                        }
                      ],
                      "type": "answer",
                      "text": "Non-permanent or portable installation",
                      "img": "Global_Assets/super-cat/ac/non-permanent-install.jpg?$staticlink$"
                    }
                  ],
                  "type": "question",
                  "text": "Do you have the ability to permanently install or are you looking for an easy/less permanent cooling solution?"
                }
              ],
              "type": "answer",
              "text": "Cool my space",
              "img": "Global_Assets/super-cat/ac/cool-my-space.jpg?$staticlink$"
            },
            {
              "nodes": [
                {
                  "nodes": [
                    {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                {
                                  "type": "product",
                                  "sku": "DEP301EW",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR30B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "FAD301NWD",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                }
                              ],
                              "type": "answer",
                              "text": "Small space - under 400 sq ft",
                              "img": "Global_Assets/super-cat/ac/window-air-conditioner-small-room.jpg?$staticlink$"
                            },
                            {
                              "nodes": [
                                {
                                  "type": "product",
                                  "sku": "DEP501EW",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR50B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR45B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                }
                              ],
                              "type": "answer",
                              "text": "Medium Space - Up to 1000 sq ft",
                              "img": "Global_Assets/super-cat/ac/window-air-conditioner-medium-room.jpg?$staticlink$"
                            },
                            {
                              "nodes": [
                                {
                                  "type": "product",
                                  "sku": "DEP701EW",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR60B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR70B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                }
                              ],
                              "type": "answer",
                              "text": "Large space - 1000 + sq ft",
                              "img": "Global_Assets/super-cat/ac/window-air-conditioner-large-room.jpg?$staticlink$"
                            }
                          ],
                          "type": "question",
                          "text": "What size space are you looking to dehumidify?"
                        }
                      ],
                      "type": "answer",
                      "text": "Moderately Damp - smells musty in humid weather",
                      "img": "Global_Assets/super-cat/ac/moderately-damp.jpg?$staticlink$"
                    },
                    {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                {
                                  "type": "product",
                                  "sku": "DEP501EW",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR50B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR45B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                }
                              ],
                              "type": "answer",
                              "text": "Small - Medium Space - Up to 1000 sq ft",
                              "img": "Global_Assets/super-cat/ac/small-medium-space.jpg?$staticlink$"
                            },
                            {
                              "nodes": [
                                {
                                  "type": "product",
                                  "sku": "DEP701EW",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR60B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                },
                                {
                                  "type": "product",
                                  "sku": "DDR70B3WP",
                                  "name": "name",
                                  "link": "link",
                                  "img": "image",
                                  "price": "price"
                                }
                              ],
                              "type": "answer",
                              "text": "Large space - 1000 + sq ft",
                              "img": "Global_Assets/super-cat/ac/window-air-conditioner-large-room.jpg?$staticlink$"
                            }
                          ],
                          "type": "question",
                          "text": "What size space are you looking to dehumidify?"
                        }
                      ],
                      "type": "answer",
                      "text": "Damp - consistently smell musty",
                      "img": "Global_Assets/super-cat/ac/damp.jpg?$staticlink$"
                    },
                    {
                      "nodes": [
                        {
                          "type": "product",
                          "sku": "DEP701EW",
                          "name": "name",
                          "link": "link",
                          "img": "image",
                          "price": "price"
                        },
                        {
                          "type": "product",
                          "sku": "DDR60B3WP",
                          "name": "name",
                          "link": "link",
                          "img": "image",
                          "price": "price"
                        },
                        {
                          "type": "product",
                          "sku": "DDR70B3WP",
                          "name": "name",
                          "link": "link",
                          "img": "image",
                          "price": "price"
                        }
                      ],
                      "type": "answer",
                      "text": "Very Damp - Consistently musty and may have mold or moisture spots in areas",
                      "img": "Global_Assets/super-cat/ac/very-damp.jpg?$staticlink$"
                    }
                  ],
                  "type": "question",
                  "text": "How humid is your space?"
                }
              ],
              "type": "answer",
              "text": "Get rid of excess moisture",
              "img": "Global_Assets/super-cat/ac/get-rid-of-moisture.jpg?$staticlink$"
            },
            {
              "nodes": [
                {
                  "nodes": [
                    {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                {
                                  "nodes": [
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "LT0815CER",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "US08D10B",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "WS08D10",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "WTC8001W",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTH0822R1",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "UE08D11C",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Small Space - 400 sq ft or less",
                                              "img": "Global_Assets/super-cat/ac/portable-air-conditioner-small-room.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "LT1215CER",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "LT1033CNR",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTA1233Q2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "WTC12001W",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTH1222R2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "LT1035HNR",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Medium Space - Up to 1000 sq ft or less",
                                              "img": "Global_Assets/super-cat/ac/portable-air-conditioner-medium-room.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "FRA144HT2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "US14D30B",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "WS15D30",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "FFTH1422R2",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "WS16C30",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Large Space - 1000+ sq ft",
                                              "img": "Global_Assets/super-cat/ac/portable-air-conditioner-large-room.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "What size space are you cooling?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Through the wall AC",
                                      "img": "Global_Assets/super-cat/ac/through-the-wall-unit-v1.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "nodes": [
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "M24CJ",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "M18CJ",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "M12CJ",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool Only",
                                                      "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                                    },
                                                    {
                                                      "nodes": [
                                                        {
                                                          "type": "product",
                                                          "sku": "LS240HSV3",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "LS307HV3",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        },
                                                        {
                                                          "type": "product",
                                                          "sku": "BR1224W3A",
                                                          "name": "name",
                                                          "link": "link",
                                                          "img": "image",
                                                          "price": "price"
                                                        }
                                                      ],
                                                      "type": "answer",
                                                      "text": "Cool and Heat",
                                                      "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                                    }
                                                  ],
                                                  "type": "question",
                                                  "text": "Would you like a heat function as well?"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Single Zone",
                                              "img": "Global_Assets/super-cat/ac/single-zone.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "PMD243HDX",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "MR36MW18X2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "SENA18HFIX2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Dual Zone",
                                              "img": "Global_Assets/super-cat/ac/dual-zone.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "PMD303HTX",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "MR36MW12X3",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "SENA09HFIX3",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Triple Zone",
                                              "img": "Global_Assets/super-cat/ac/triple-zone.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "How many areas/zones are you looking to cool?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Single or multi-zone split AC",
                                      "img": "Global_Assets/super-cat/ac/single-or-multi-zone.jpg?$staticlink$"
                                    }
                                  ],
                                  "type": "question",
                                  "text": "Do you want a through the wall air conditioner or a single or multi-zone remote split cooling system?"
                                }
                              ],
                              "type": "answer",
                              "text": "Wall",
                              "img": "Global_Assets/super-cat/ac/through-the-wall-unit-v2.jpg?$staticlink$"
                            },
                            {
                              "nodes": [
                                {
                                  "nodes": [
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "LW8015ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "CP08G10A",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRE0833Q1",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "WAC8001W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW8015HR",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRH0822R1",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Small Space 400 sq ft or less",
                                      "img": "Global_Assets/super-cat/ac/window-air-conditioner-small-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "LW1215ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1015ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "CP12G10A",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "WAC12001W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1215HR",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRH1222R2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Medium Space - 400 - 1000 sq ft",
                                      "img": "Global_Assets/super-cat/ac/window-air-conditioner-medium-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "EP18G33B",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "CP24G30A",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1815ER",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "WAC18001W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "FFRH2522R2",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "LW1815HR",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Large Space - 1000+ sq ft",
                                      "img": "Global_Assets/super-cat/ac/window-air-conditioner-large-room.jpg?$staticlink$"
                                    }
                                  ],
                                  "type": "question",
                                  "text": "What size space are you looking to cool?"
                                }
                              ],
                              "type": "answer",
                              "text": "Window",
                              "img": "Global_Assets/super-cat/ac/window-install.jpg?$staticlink$"
                            }
                          ],
                          "type": "question",
                          "text": "Are you looking to install you cooling solution on your wall or in your window?"
                        }
                      ],
                      "type": "answer",
                      "text": "Permanent installation",
                      "img": "Global_Assets/super-cat/ac/permanent-install.jpg?$staticlink$"
                    },
                    {
                      "nodes": [
                        {
                          "nodes": [
                            {
                              "nodes": [
                                {
                                  "nodes": [
                                    {
                                      "nodes": [
                                        {
                                          "type": "product",
                                          "sku": "AP8000W",
                                          "name": "name",
                                          "link": "link",
                                          "img": "image",
                                          "price": "price"
                                        },
                                        {
                                          "type": "product",
                                          "sku": "PAC801W",
                                          "name": "name",
                                          "link": "link",
                                          "img": "image",
                                          "price": "price"
                                        },
                                        {
                                          "type": "product",
                                          "sku": "AP10002BL",
                                          "name": "name",
                                          "link": "link",
                                          "img": "image",
                                          "price": "price"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Small - Under 350 sq ft",
                                      "img": "Global_Assets/super-cat/ac/portable-air-conditioner-small-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP12000S",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "PAC1201W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "APAC120S",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP12000HS",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "DPA120HB1WDB",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "AP14001HS",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Medium  Up to 450 sq ft",
                                      "img": "Global_Assets/super-cat/ac/portable-air-conditioner-medium-room.jpg?$staticlink$"
                                    },
                                    {
                                      "nodes": [
                                        {
                                          "nodes": [
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP14003W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "PAC1401W",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "APAC140C",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool only",
                                              "img": "Global_Assets/super-cat/ac/cool-only.jpg?$staticlink$"
                                            },
                                            {
                                              "nodes": [
                                                {
                                                  "type": "product",
                                                  "sku": "AP14001HS",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "APAC140HC",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                },
                                                {
                                                  "type": "product",
                                                  "sku": "P14B",
                                                  "name": "name",
                                                  "link": "link",
                                                  "img": "image",
                                                  "price": "price"
                                                }
                                              ],
                                              "type": "answer",
                                              "text": "Cool and heat",
                                              "img": "Global_Assets/super-cat/ac/cool-and-heat.jpg?$staticlink$"
                                            }
                                          ],
                                          "type": "question",
                                          "text": "Would you like a heat function included?"
                                        }
                                      ],
                                      "type": "answer",
                                      "text": "Large - up to 600 sq ft",
                                      "img": "Global_Assets/super-cat/ac/portable-air-conditioner-large-room.jpg?$staticlink$"
                                    }
                                  ],
                                  "type": "question",
                                  "text": "What size area are you looking to cool?"
                                }
                              ],
                              "type": "answer",
                              "text": "I have the ability to vent",
                              "img": "Global_Assets/super-cat/ac/ability-to-vent.jpg?$staticlink$"
                            }
                          ],
                          "type": "question",
                          "text": "Do you have a place to vent out hot air from the room you are trying to cool such as a window, doorway or drop ceiling?"
                        }
                      ],
                      "type": "answer",
                      "text": "Non-permanent or portable installation",
                      "img": "Global_Assets/super-cat/ac/non-permanent-install.jpg?$staticlink$"
                    }
                  ],
                  "type": "question",
                  "text": "Do you have the ability to permanently install or are you looking for an easy/less permanent cooling solution?"
                }
              ],
              "type": "answer",
              "text": "Both",
              "img": "Global_Assets/super-cat/ac/both.jpg?$staticlink$"
            }
          ]
      }];

      $scope.question = results[0].text;
      $scope.productSelection = results[0].nodes;

      n_params = Object.keys($scope.params).length;

      // this means navigate tree
      if (n_params) {
        $scope.first = false;
        results = results[0];

        for (var i = 1; i < n_params + 1; ++i) {
          // not last param
          if (i != n_params ) {
            results = results.nodes[$scope.params[('n' + (i - 1))] - 1].nodes[0];
            $scope.items = false;
          }
          // last param
          else {
            var pars = $scope.params['n'+(n_params-1)].split("?");
            // ?item = true on the last variable to look at items
            if(pars.length > 1) {
              $scope.items = true;

              var items = results.nodes[parseInt(pars[0]) - 1].nodes;
              angular.forEach(items, function(key, value) {
                  $scope.getProductData(key);
              });
              $scope.itemSelection = items;
            }
            else {
              results = results.nodes[$scope.params[('n' + (i -1 ))] - 1].nodes[0];
              $scope.items = false;
            }
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