var amazon = "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";
	
app.factory('photos', ['$http', function($http){
	return $http.get(amazon)
	.success(function(data) {
		console.log(amazon);
		console.log("hey stop");
		return data;
	})
	.error(function(data){
		return data;
	});
}]);