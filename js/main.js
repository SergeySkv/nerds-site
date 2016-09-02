var historicalOverlay;

function initialize() {

  var mapProp = {

    center: new google.maps.LatLng(40.740, -74.18),
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };

  var map = new google.maps.Map(document.getElementById("krasnodar-map"), mapProp);
     
  var imageBounds = {

    north: 40.773941,
    south: 40.712216,
    east: -74.12544,
    west: -74.22655

  };

  historicalOverlay = new google.maps.GroundOverlay( './img/logo-bage.png', imageBounds);

  historicalOverlay.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);


