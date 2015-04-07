function displayChoices (choices){

	console.log("displayChoices Called!");
	
	app.controller('GuideController', function(){
		this.productSelection = getChoices(choices);
		this.promptValue = getPrompt(choices);
	});

};

// Takes in choices object > prompt value 
function getPrompt (c){
	// console.log(c[0].prompt);
	return c[0].prompt;
};


var choices = [
	{
		"prompt": "Here's the best match for you:",
		"options": [
			{
				"image":"images/01.jpg",
				"name": "New Product 1",
				"price": 549.99,
				"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
				"url":"http://www.google.com/",
				"options": [
					{
						"image":"images/ph.jpg",
						"name": "New Product 1.1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1.1.1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1.1.2",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1.1.3",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							}
						]							
					},
					{
						"image":"images/ph.jpg",
						"name": "New Product 1.2",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							}
						]							
					},
					{
						"image":"images/ph.jpg",
						"name": "New Product 1.3",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/"							
							}
						]							
					},
				],
			},
			{
				"image":"images/02.jpg",
				"name": "New Product 2",
				"price": 549.99,
				"description": '2 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.',
				"url":"http://www.google.com/",
				"options": [
					{
						"image":"images/ph.jpg",
						"name": "New Product 1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
						],							
					},
					{
						"image":"images/ph.jpg",
						"name": "New Product 1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
						],							
					},
					{
						"image":"images/ph.jpg",
						"name": "New Product 1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
						],							
					},
				],
			},
			{
				"image":"images/03.jpg",
				"name": "New Product 3",
				"price": 549.99,
				"description": '3 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.',
				"url":"http://www.google.com/",
				"options": [
					{
						"image":"images/ph.jpg",
						"name": "New Product 1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
						],
					},
					{
						"image":"images/ph.jpg",
						"name": "New Product 1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
						],							
					},
					{
						"image":"images/ph.jpg",
						"name": "New Product 1",
						"price": 49.99,
						"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
						"url":"http://www.google.com/",
						"options": [
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
							{
								"image":"images/ph.jpg",
								"name": "New Product 1",
								"price": 49.99,
								"description": "1 Bacon ipsum dolor amet meatloaf rump chuck leberkas kielbasa. Chicken kielbasa ham hock short loin. Kielbasa picanha fatback short ribs beef ball tip spare ribs.",
								"url":"http://www.google.com/",							
							},
						],							
					},
				],
			},
		]
	}
];

displayChoices(choices);

// Takes in choice object > first set of options
function getChoices (c){
	// console.log(c[0].options);
	return c[0].options;
};

getChoices(choices);
getPrompt(choices);

document.addEventListener("DOMContentLoaded", function() {
  var magicalBtn = document.getElementsByClassName("choiceBtn");

	for (var i = 0; i < magicalBtn.length; i++) {
	 	magicalBtn[i].addEventListener('click', function(){ displayChoices(choices[0].options[i]) });
	};
});