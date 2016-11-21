//AIzaSyDu_nMBOB8fqUKKOasa3eXvxHcvOJmpRho

var map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7128, lng: -74.0059},
	zoom: 12
    });
}

// function renderMarkers (){
// 	var marker = new google.maps.Marker ({
// 		position: {lat: 40.7128, lng: -74.0059},
// 		map: map
// });
// }

//call the function initMap to place on DOM
initMap()
//renderMarkers()

$.ajax({
	type: 'GET',
	url: 'http://api.citybik.es/citi-bike-nyc.json',
	dataType: 'jsonp',
	success: function (response) {
		console.log(response)

		response.forEach(function (station) {
		//create the appopriately formatted coordinates for latitude and logitute with math! 
			var lat = station.lat/1000000;
			var lng = station.lng/1000000;
			var name = station.name;

			console.log (lat, lng);

			var marker = new google.maps.Marker ({
				title: name,
				position: {lat: lat, lng: lng}, 
				map: map,
				})
		// 	var name = station.name;
		// 	var free = station.free;
		// 	var bikes = station.bikes;
		
		// $('#container')
		// 	.append('<p>Name: ' + name + '</p>' )
		// 	.append('<p>Bikes Available: ' + free + '</p>')
		// 	.append('<p>Bikes: ' + bikes + '</p>')
		// 	.append('<hr/>') 
		})

    },
})
