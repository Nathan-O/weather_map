$(document).ready(function(){
   console.log("Sanity");

   // initMap();

   $("#location-submit").on("click", function(e){
      // event.preventDefault();
      console.log("hi");
      getLocation();
   });
});

/*
NOTE: Map 'Zoom Level' generals:
1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings
*/
function initMap(loc) {
   console.log("In initMap()");
   console.log(loc);
   map = new google.maps.Map(document.getElementById('map'), {
      // center: {lat: -34.397, lng: 150.644},
      center: loc,
      zoom: 8
   });


   // map.setCenter(results[0].geometry.location);//center the map over the result
   //place a marker at the location
   var marker = new google.maps.Marker({
      map: map,
      position: loc
   });
}


// get coordinates from user.
//
// set to variable
//
// send var to init-Map function
//
// center map on coord variable
//
// render map.

var geocoder = new google.maps.Geocoder();

function getLocation(){
   var text = $("#location").val();

   console.log(text);

   $("#location").val('');

   geocoder.geocode({address: text}, function(results, status){
      if (status == google.maps.GeocoderStatus.OK){

         var latitude = results[0].geometry.location.lat();
         var longitude = results[0].geometry.location.lng();

         var location = {};

         location.lat = latitude;
         location.lng = longitude;


         initMap(location);
         // map.setCenter(results[0].geometry.location);//center the map over the result
         // //place a marker at the location
         // var marker = new google.maps.Marker({
         //    map: map,
         //    position: results[0].geometry.location
         // });
      } else {
         alert('Geocode was not successful for the following reason: ' + status);
      }
   });

}
