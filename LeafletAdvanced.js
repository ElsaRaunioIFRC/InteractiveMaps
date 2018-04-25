<!DOCTYPE html> 
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blend 2 maps</title>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
<style>
    html, body, #map {height: 100%;}
</style>
</head>

<body>
<div id="map"></div>
<script>

var icrc_trans = L.tileLayer('https://a.tiles.mapbox.com/v4/icrc.b9f7f090/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaWNyYyIsImEiOiJ5dlNMaUhnIn0.QG1pZIPyfyekyHFAS6vb2w#3');
var icrc_light = L.tileLayer('https://a.tiles.mapbox.com/v4/icrc.4bc03a9a/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaWNyYyIsImEiOiJ5dlNMaUhnIn0.QG1pZIPyfyekyHFAS6vb2w#3', {subdomains:'abc', maxZoom:6, noWrap:true, attribution:'<a href="http://www.icrc.com">Map Data Source: ICRC</a>' });

var map = L.map ( 'map', { center: [0, 0], zoom: 2, layers: [icrc_trans, icrc_light] } );

var fgMap = icrc_trans;
var bgMap = icrc_light;
map.addLayer(bgMap);            // add initial backgroundmap-layer to map
bgMap.bringToBack();            // move backgroundmap-Layer to to the background of the map


</script>
</body>
</html>
