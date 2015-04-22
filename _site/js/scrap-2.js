.controller('GuideController', function($scope, $http){
		$scope.productSelection = options.options;
		$scope.prompt = options.question;

		$scope.getNextSet = function(o) {
	  	if ("options" in o) {
	  		$scope.productSelection = o.options;
	  	}
	  	else {

	  	}
    };
	})
.controller('itemCtrl', ['$routeParams', function($routeParams) {
  this.name = "itemCtrl";
  this.params = $routeParams;
});

var options = {
	"question":"Question #1",
	"options":[
	{
		"id" : "1",
		"title" : "Product 1",
		"options" : [
			{
				"id" : "1.1",
				"title" : "Product 1.1",
				"options" : [
					{
						"id" : "1.1",
						"title" : "Product 1.1.1"
					},
					{
						"id" : "1.2",
						"title" : "Product 1.1.2"
					},
					{
						"id" : "1.3",
						"title" : "Product 1.1.3"
					}
				]
			},
			{
				"id" : "1.2",
				"title" : "Product 1.2",
				"options" : [
					{
						"id" : "1.1",
						"title" : "Product 1.2.1"
					},
					{
						"id" : "1.2",
						"title" : "Product 1.2.2"
					},
					{
						"id" : "1.3",
						"title" : "Product 1.2.3"
					}
				]
			},
			{
				"id" : "1.3",
				"title" : "Product 1.3",
				"options" : [
					{
						"id" : "1.1",
						"title" : "Product 1.3.1"
					},
					{
						"id" : "1.2",
						"title" : "Product 1.3.2"
					},
					{
						"id" : "1.3",
						"title" : "Product 1.3.3"
					}
				]
			}
		]
	},
	{
		"id" : "2",
		"title" : "Product 2",
		"options" : [
			{
				"id" : "2.1",
				"title" : "Product 2.1"
			},
			{
				"id" : "2.2",
				"title" : "Product 2.2"
			},
			{
				"id" : "2.3",
				"title" : "Product 2.3"
			}
		]
	},
	{
		"id" : "3",
		"title" : "Product 3",
		"options" : [
			{
				"id" : "3.1",
				"title" : "Product 3.1"
			},
			{
				"id" : "3.2",
				"title" : "Product 3.2"
			},
			{
				"id" : "3.3",
				"title" : "Product 3.3"
			}
		]
	}]
};