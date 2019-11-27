/**
 * Custom Filters 
 */

var myapp = angular.module("MyModule",[])
			       .controller("MyController",function($scope){
				var myCricketer = [
					{
						name:"Vijay Shankar",
						bat:"Right hand bat",
						bowl:"Right arm medium",
						Slot:"No:4"
					},
					{
						name:"Dinesh karthik",
						bat:"Right hand bat",
						bowl:"N/A",
						Slot:"No:5"
					},
					{
						name:"Ravindra Jadeja",
						bat:"Left hand bat",
						bowl:"Left arm orthodox",
						Slot:"No:7"
					},
					{
						name:"Hardhik Pandya",
						bat:"Right hand bat",
						bowl:"Right arm fast medium",
						Slot:"No:6"
					}
				];
				
				$scope.info = myCricketer;
				$scope.search = function(item){
					
					if($scope.customSearch == undefined )
						return true;
					else{
						
						if (item.name.toLowerCase().indexOf($scope.customSearch.toLowerCase()) != -1 || item.bat.toLowerCase().indexOf($scope.customSearch.toLowerCase()) != -1 )
							{
							return true;
							}
					}
					return false;
				}
					
				
			});

			

