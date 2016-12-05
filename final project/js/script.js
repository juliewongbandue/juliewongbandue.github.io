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
		displayMarkers();
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
	function displayMarkers(){
		for (i=0; i<ajaxData.length; i++){
			var lat = parseFloat (ajaxData[i].data.location.lat);
			var lng = parseFloat (ajaxData[i].data.location.long);

			var marker = new google.maps.Marker ({
			position: {lat: lng, lng: lat},
			map: map,
			})
		}
	};
	
	var $userSearchEntry = $('#searchEntry');
	var $museumInfo = $('.museumInfo');

	$('.search').submit(function (event) {
		event.preventDefault();
		var searchStr = $userSearchEntry.val();
		console.log (searchStr);

		var matchingResults = ajaxData.filter(function(item) {
			var itemInfo = item.data;
			if ( itemInfo.name !== '' && itemInfo.name.toLowerCase().indexOf(searchStr ) !== -1 ) {
				return true;
			}
			if ( itemInfo.address1 !== '' && itemInfo.address1.toLowerCase().indexOf( searchStr ) !== -1 ) {
				return true;
			}
			if ( itemInfo.address2 !== '' && itemInfo.address2.toLowerCase().indexOf( searchStr ) !== -1 ) {
				return true;
			}
		});

		matchingResults.forEach(function(item){
			var itemInfo = item.data; 
			$museumInfo.append(
				'<li>' +
				'<div>' + itemInfo.name + '</div>' +
				'<div>' + itemInfo.address1 + '</div>' +
				'<div>' + itemInfo.address2 + '</div>' +
				'<span>' + itemInfo.state + ', ' + '</span>' + '<span>' + itemInfo.zip +
				'</li>'
				)
		})

	})
})
