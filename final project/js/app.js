var map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7128, lng: -74.0059},
	zoom: 13
    });
}

initMap() 

$.ajax ({
	type: 'GET',
	url: 'https://data.cityofnewyork.us/api/views/fn6f-htvy/rows.json?accessType=DOWNLOAD', 
	dataType: 'jsonp',
	success: function (response){
		console.log (resposne)
		
	}
})
