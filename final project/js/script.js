var map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7128, lng: -74.0059},
	zoom: 13
    });
}

initMap() 

$(document).ready(function(){
	var ajaxData;
	init();

	function init(){
		getData();
		console.log(ajaxData);
		displayData();
	};
	function getData(){
		$.ajax({
			method: 'GET',
			url:'https://rawgit.com/juliewongbandue/juliewongbandue.github.io/master/final%20project/js/json.js',
			dataType: 'json',
			async: false,
			success: function(response) {
				ajaxData = response;
        	},
    		error: function(error) {
    			console.log(error);
    		}
		})
	};
	function displayData(){
		for (i=0; i<ajaxData.length; i++){
			var lat = parseFloat (ajaxData[i].data.location.lat);
			var lng = parseFloat (ajaxData[i].data.location.long);
			console.log(lat, lng);

			var marker = new google.maps.Marker ({
			position: {lat: lng, lng: lat},
			map: map,
			})
		}
	};
	// RUN A SEARCH
	$('.search').submit(function (searchEntry) {
		searchEntry.preventDefault(); 
		var userSearchEntry = $('.searchEntry').val();
		for (i=0; i<ajaxData.length; i++) {
			var museumName = ajaxData[i].data.name;
			var address= ajaxData[i].data.address1;
			var zip= ajaxData[i].data.zip;
			if (userSearchEntry = museumName){
				$('.museumName').html('museum name here')
				$('#address').html()
				$('#website').html()

			} else ()
		}
	})

});
		
