// Add console.log to check to see if our code is working.
console.log("working");



//get data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};


// Grabbing our GeoJSON data -- using pointToLayer
/* L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng)
    .bindPopup(`<h2> ${feature.properties.name} <br><hr style="width:100%;text-align:left;margin-left:0"> 
    ${feature.properties.city}, ${feature.properties.country}</br> </h2>`);
  }

}).addTo(map); */

// Grabbing our GeoJSON data -- using onEachFeature
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature,layer) {
    console.log(feature);
    layer.bindPopup(`<h2> Airport Code: ${feature.properties.faa} <br><hr style="width:100%;text-align:left;margin-left:0"> 
    Airport Name: ${feature.properties.name}</br> </h2>`);
  }

}).addTo(map);

// Coordinates for each point to be used in the line.
/* let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088],
  [30.1975, -97.664],
  [43.6777,-79.6248],
  [40.6413,-73.7781]
 
];*/

//create a polyline using the line coordinates and make the line red
/* L.polyline(line, {
  color:"blue",
  weight: "4",
  opacity: "0.5",
  dashArray: "20"

}).addTo(map); */

// Loop through the cities array and create one marker for each city.
/* cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{
    radius: city.population/100000,
    color: "orange"
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
}); */


//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
//adding some code to see if it picks it up

/* L.circleMarker([34.0522, -118.2437], {
  radius: 100,
  color: "black",
  fillcolor: '#ffffa1'
}).addTo(map); */

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);