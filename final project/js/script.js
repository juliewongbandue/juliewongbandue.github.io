var map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7128, lng: -74.0059},
	zoom: 13
    });
}

initMap() 

$.ajax({
	type: 'GET',
	url:'/Users/juliewongbandue/Desktop/juliewongbandue.github.io/final project/js/json', 
	dataType: 'jsonp', 
	success: function (response) {
		console.log (response)

		response. forEach(function (data) {
			var lat = data.lat;
			var lng = data.long;
			console.log (lat, lng)

		})
	}
})
		
