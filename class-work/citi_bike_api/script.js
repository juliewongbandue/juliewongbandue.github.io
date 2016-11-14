$.ajax({
	type: 'GET',
	url: 'http://api.citybik.es/citi-bike-nyc.json',
	dataType: 'jsonp',
	success: function (response) {
		console.log(response)

		response.forEach(function (station) {
			var name = station.name;
			var free = station.free;
			var bikes = station.bikes;
		
		$('#container')
			.append('<p>Name: ' + name + '</p>' )
			.append('<p>Bikes Available: ' + free + '</p>')
			.append('<p>Bikes: ' + bikes + '</p>')
			.append('<hr/>') 
		})

    },
})
