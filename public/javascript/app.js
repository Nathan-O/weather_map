$(document).ready(function(){
   console.log("Sanity");
});

/*
NOTE: Map 'Zoom Level' generals:
1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings
*/
function initMap() {
   console.log("In initMap()");
   map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
   });

   setTimeout(function(){
      alert("Hello");

   }, 3000);
}
