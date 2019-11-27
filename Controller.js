/**
 * 
 */

myapp.controller("MyCustomController",function($scope){
	
	var Cricketer = [
		{
			name:"Vijay Shankar",
			bat:"Right hand bat",
			bowl:"Right arm medium",
			gender:1
		},
		{
			name:"Dinesh karthik",
			bat:"Right hand bat",
			bowl:"N/A",
			gender:1
		},
		{
			name:"Ravindra Jadeja",
			bat:"Left hand bat",
			bowl:"Left arm orthodox",
			gender:1
		},
		{
			name:"Hardhik Pandya",
			bat:"Right hand bat",
			bowl:"Right arm fast medium",
			gender:1
		},
		{
			name:"Smrithi Madhana",
			bat:"Left hand bat",
			bowl:"N/A",
			gender:2
		}
	];
	$scope.info = Cricketer;
});

