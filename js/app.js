(function(){

	var app = angular.module('productGuide',[]);

	app.controller('GuideController', function(){
		this.productSelection = options;

		// console.log(options);

	});

	app.controller('nextSetController', ['$scope', function($scope) {
	  
	  $scope.getNextSet = function(o) {
	  	$scope.options.image = o.options;
	  	$scope.options.title = o.options;
	  	$scope.options.price = o.options;
	  	$scope.options.description = o.options;
    };

	}]);

	var options = [
		{
			"id" : "1",
			"image" : "images/01.jpg",
			"title" : "Product 1",
			"price" : "399.99",
			"description" : "High Quality",
			"url":"http://www.google.com/",
			"options" : [
				{
					"id" : "1.1",
					"image" : "images/02.jpg",
					"title" : "Product 1.1",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				},
				{
					"id" : "1.2",
					"image" : "images/02.jpg",
					"title" : "Product 1.2",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				},
				{
					"id" : "1.3",
					"image" : "images/02.jpg",
					"title" : "Product 1.3",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				}
			]
		},
		{
			"id" : "2",
			"image" : "images/01.jpg",
			"title" : "Product 2",
			"price" : "399.99",
			"description" : "High Quality",
			"url":"http://www.google.com/",
			"options" : [
				{
					"id" : "2.1",
					"image" : "images/02.jpg",
					"title" : "Product 2.1",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				},
				{
					"id" : "2.2",
					"image" : "images/02.jpg",
					"title" : "Product 2.2",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				},
				{
					"id" : "2.3",
					"image" : "images/02.jpg",
					"title" : "Product 2.3",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				}
			]
		},
		{
			"id" : "3",
			"image" : "images/01.jpg",
			"title" : "Product 3",
			"price" : "399.99",
			"description" : "High Quality",
			"url":"http://www.google.com/",
			"options" : [
				{
					"id" : "3.1",
					"image" : "images/02.jpg",
					"title" : "Product 3.1",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				},
				{
					"id" : "3.2",
					"image" : "images/02.jpg",
					"title" : "Product 3.2",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				},
				{
					"id" : "3.3",
					"image" : "images/02.jpg",
					"title" : "Product 3.3",
					"price" : "399.99",
					"description" : "High Quality",
					"url":"http://www.google.com/"
				}
			]
		}
	];

})();