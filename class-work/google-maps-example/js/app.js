var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.7128, lng: -74.0059},
		zoom: 15
        });
      }

	var marker = new google.maps.Marker ({
		position: {lat: 40.7128, lng: -74.0059},
		map:map, 

})

//turn on the map
initMap()