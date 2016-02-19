function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var mcOptions = {gridSize: 50, maxZoom: 15};
	var mc = new MarkerClusterer(map, [], mcOptions);

  data.forEach(function(station){
		var marker = new google.maps.Marker({
		    position: {lat: +station.lat, lng: +station.lng},
		    label: station.name,
		    map: map
		  });
	});
}
