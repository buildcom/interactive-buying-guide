(function(){

  angular.module('productGuide',['ngRoute','ngAnimate'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/item/:itemId', {
          templateUrl: 'views/pdp.html',
          controller: 'pdpCtrl'
        })
        .when('/:n0?/:n1?/:n2?/:n3?/:n4?/:n5?/:n6?/:n7?/:n8?/:n9/', {
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

    console.log(Object.keys($scope.params).length);

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
  $scope.params = $routeParams;

  console.log(_.size($scope.params.Data));
  console.log($scope.params.lengthS);
});

var step = {
  
};

})();