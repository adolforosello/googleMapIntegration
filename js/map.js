//Initialize and add the map 
function initMap() { 
	//geoCoder instance
	var geoCoder = new google.maps.Geocoder();
	var dire = geoCoder.geocode ({address : "chaco 921 mar del plata"},function(result,status){
		console.log(status);
		console.log(result[0].geometry.location.lat());
		console.log(result[0].geometry.location.lng());
		if(status==google.maps.GeocoderStatus.OK){
			
		}
	});


	// The location of Uluru 
	var uluru = {
		lat: -37.9839048,
		lng: -57.55999259999999
	};
	// The map, centered at Uluru 
	var map = new google.maps.Map( 
		document.getElementById('map'),
		{
			zoom: 18, 
			center: uluru
		}
	); 
	// The marker, positioned at Uluru 
	var marker = new google.maps.Marker(
		{
			position: uluru,
			 map: map
		}
	); 
}


// Note: This example requires that you consent to location sharing when 
// prompted by your browser. If you see the error "The Geolocation service 
// failed.", it means you probably did not give permission for the browser to 
// locate you. 
/*var map, infoWindow; 
function initMap() { 
	map = new google.maps.Map(document.getElementById('map'),{ center: {lat: -34.397,lng: 150.644}, zoom: 6 }); 
	infoWindow = new google.maps.InfoWindow; 
	// Try HTML5 geolocation. 
	if (navigator.Geolocation) { 
		navigator.geolocation.getCurrentPosition(
			function(position) { 
				var pos = { 
					lat: position.coords.latitude, lng: position.coords.longitude 
				}; 
				infoWindow.setPosition(pos); 
				infoWindow.setContent('Location found.'); 
				infoWindow.open(map); map.setCenter(pos); 
			}, 
			function() {
				handleLocationError(true, infoWindow, map.getCenter()); 
			}
		); 
	} else { 
		 // Browser doesn't support Geolocation 
		 handleLocationError(false, infoWindow, map.getCenter()); 
		}
} 
function handleLocationError(browserHasGeolocation, infoWindow, pos) { 
 	infoWindow.setPosition(pos); 
 	infoWindow.setContent(
 			browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesnt support geolocation.'
 		); 
 	infoWindow.open(map); 
}*/