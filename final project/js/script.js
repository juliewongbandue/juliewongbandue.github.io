var map;

function initMap() {

	map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.7128, lng: -74.0059},
	zoom: 13
    });
}

initMap() 
//write jquery below here
$(document).ready(function(){
	//to access jSON data via ajax
	var ajaxData;
	var markers = []; 
	console.log (markers);

	//run initialize function
	init();

	//define init function
	function init(){
		//get data from json
		getData();
		//display the map markers
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
			//Note: the lat/long are labelled in correctly on the JSON file. 
			position: {lat: lng, lng: lat},
			map: map,
			});
			//push the markers found from json into the markers array
			markers.push(marker);
		}
	};

	//Search code here. The user can search by museum or address.
	var $userSearchEntry = $('.searchEntry');
	var $museumInfo = $('#museumInfo');

	$('.search').submit(function (event) {
		event.preventDefault();

		//get the value of <input>
		var searchStr = $userSearchEntry.val();
		//change that value to lowercase
		searchStr = searchStr.toLowerCase();

		var matchingResults = ajaxData.filter(function(item) {
			var itemInfo = item.data;
			// if name isn't an empty string, and contains the search string, add the item to results
			if ( itemInfo.name !== '' && itemInfo.name.toLowerCase().indexOf(searchStr ) !== -1 ) {
				return true;
			}
			// if the string isn't in name, check the first address in the same way
			if ( itemInfo.address1 !== '' && itemInfo.address1.toLowerCase().indexOf( searchStr ) !== -1 ) {
				return true;
			}
			// finally if the first two fail, check the second address
			if ( itemInfo.address2 !== '' && itemInfo.address2.toLowerCase().indexOf( searchStr ) !== -1 ) {
				return true;
			}
		});
		//empty the <div> that you'll be placing the musuem info in before adding anything
		$museumInfo.empty();
		//empty the search
		$userSearchEntry.val('');

		//put it in the dom!
		matchingResults.forEach(function(item){
			var itemInfo = item.data;
			var zip = parseInt (itemInfo.zip);
			var lat = parseFloat (itemInfo.location.long);
			var long = parseFloat (itemInfo.location.lat);
			console.log (lat, long)
			//appends the info into ($#museumInfo)
			$museumInfo.append(
				'<h2 class ="museumName raleway">' + itemInfo.name + '</h2>' +
				'<p class ="openSansCondensed">' + itemInfo.address1 + '</p>' +
				'<p>' + itemInfo.address2 + '</p>' +
				'<span>' + itemInfo.state + ',' + '<span>' + zip + '</span>'
				);
		})

	})
})
