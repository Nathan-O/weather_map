$(document).ready(function(){
   console.log("Sanity");

   // initMap();

   $("#location-submit").on("click", function(e){
      // event.preventDefault();
      console.log("hi");
      var coords = getLocation();
      console.log("After");
      console.log(coords);
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
function initMap(orgLoc, destLoc) {
   console.log("In initMap()");
   console.log(orgLoc);
   console.log(destLoc);

   map = new google.maps.Map(document.getElementById('map'), {
      // center: {lat: -34.397, lng: 150.644},
      center: orgLoc,
      zoom: 8
   });


   // map.setCenter(results[0].geometry.location);//center the map over the result
   //place a marker at the location
   var orgMarker = new google.maps.Marker({
      map: map,
      position: orgLoc
   });

   var destMarker = new google.maps.Marker({
      map: map,
      position: destLoc
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
   var originCoord;
   var destCoord;

   var coords = [];

   var originLoc = $("#origin-loc").val();
   var destinationLoc = $("#destination-loc").val();

   console.log(originLoc);
   console.log(destinationLoc);

   $("#origin-loc").val('');
   $("#destination-loc").val('');

   originCoord = getCoords(originLoc, function(){
      coords.push(originCoord);
   });
   destCoord = getCoords(destinationLoc, function (){
      coords.push(destCoord);
   });

   return coords;

   /*
   NOTE:
   So far this is working correctly except for one large error.

   The getCoords function runs async and thus with the current
   code is rendering the map before the map has coordinates.
   */






   // geocoder.geocode({address: originLoc}, function(results, status){
   //    if (status === google.maps.GeocoderStatus.OK){
   //
   //       var latitude = results[0].geometry.location.lat();
   //       var longitude = results[0].geometry.location.lng();
   //
   //       // var location = {};
   //       originCoord = {};
   //       originCoord.lat = latitude;
   //       originCoord.lng = longitude;
   //
   //       console.log(originCoord);
   //
   //       coordinates.push(originCoord);
   //       // initMap(location);
   //
   //
   //       // map.setCenter(results[0].geometry.location);//center the map over the result
   //       // //place a marker at the location
   //       // var marker = new google.maps.Marker({
   //       //    map: map,
   //       //    position: results[0].geometry.location
   //       // });
   //    } else {
   //       alert('Geocode was not successful for the following reason: ' + status);
   //    }
   // });



   // geocoder.geocode({address: destinationLoc}, function(results, status){
   //    if (status === google.maps.GeocoderStatus.OK){
   //
   //       var latitude = results[0].geometry.location.lat();
   //       var longitude = results[0].geometry.location.lng();
   //
   //       // var location = {};
   //       destCoord = {};
   //       destCoord.lat = latitude;
   //       destCoord.lng = longitude;
   //
   //       console.log(destCoord);
   //
   //       coordinates.push(destCoord);
   //       // initMap(location);
   //
   //
   //       // map.setCenter(results[0].geometry.location);//center the map over the result
   //       // //place a marker at the location
   //       // var marker = new google.maps.Marker({
   //       //    map: map,
   //       //    position: results[0].geometry.location
   //       // });
   //    } else {
   //       alert('Geocode was not successful for the following reason: ' + status);
   //    }
   // });

   // console.log(originCoord);
   // console.log(destCoord);
   //
   // console.log(coordinates);


   // $.when(originCoord !== undefined && destCoord !== undefined).then(function(){
   //    initMap(originCoord, destCoord);
   //
   // });
   // initMap(coordinates);

}

function getCoords(loc){
   geocoder.geocode({address: loc}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK){

         var latitude = results[0].geometry.location.lat();
         var longitude = results[0].geometry.location.lng();

         // var location = {};
         coord = {};
         coord.lat = latitude;
         coord.lng = longitude;

         console.log(coord);

         // coordinates.push(destCoord);
         // initMap(location);
         return coord;


      } else {
         alert('Geocode was not successful for the following reason: ' + status);
      }
   });
}
// var routes = new google.maps.DirectionsService();
// var renderer = new google.maps.DirectionsRenderer();
//
//
// function setRoute(){
//
//
//    var requestObj = {};
//    requestObj.origin = "";
//    requestObj.destination = "";
//    requestObj.travelMode = ""; // ???????????* (ex: DRIVING , WALKING , BICYCLING , TRANSIT)
//
//    routes.route();
//
//
// }






// var requestObj = {};
// requestObj.origin = "";
// requestObj.destination = "";
// requestObj.travelMode = ""; // ???????????* (ex: DRIVING , WALKING , BICYCLING , TRANSIT)
