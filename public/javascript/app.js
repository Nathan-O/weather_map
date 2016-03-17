$(document).ready(function(){
   console.log("Sanity");

   // initMap();

   $("#location-submit").on("click", function(e){
      // event.preventDefault();
      console.log("hi");
      // var coords = getLocation();
      initMap();
      // console.log("After");
      // console.log(coords);
   });
});

var geocoder = new google.maps.Geocoder();



function initMap(){

   var originCoord;
   var destCoord;
   var coordinates;

   var loc = {};



   var coords = [];

   var originLoc = $("#origin-loc").val();
   var destinationLoc = $("#destination-loc").val();

   // locs.push(originLoc);
   // locs.push(destinationLoc);
   //
   // console.log(locs);

   // console.log(originLoc);
   // console.log(destinationLoc);

   $("#origin-loc").val('');
   $("#destination-loc").val('');


   geocoder.geocode({address: originLoc}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK){

         console.log("Geocoding Done.");

         var latitude = results[0].geometry.location.lat();
         var longitude = results[0].geometry.location.lng();

         // var location = {};
         // coord = {};
         var orgLoc = {};
         orgLoc.lat = latitude;
         orgLoc.lng = longitude;

         // console.log(coord);

         // coordinates.push(destCoord);
         // initMap(location);
         coords.push(orgLoc);



         geocoder.geocode({address: destinationLoc}, function(results, status){
            if (status === google.maps.GeocoderStatus.OK){

               console.log("Geocoding Done.");

               var latitude = results[0].geometry.location.lat();
               var longitude = results[0].geometry.location.lng();

               // var location = {};
               // coord = {};
               var destLoc = {};
               destLoc.lat = latitude;
               destLoc.lng = longitude;

               // console.log(coord);

               // coordinates.push(destCoord);
               // initMap(location);
               coords.push(destLoc);

               renderMap(coords);


            } else {
               alert('Geocode was not successful for the following reason: ' + status);
            }
         });



      } else {
         alert('Geocode was not successful for the following reason: ' + status);
      }
   });

}

/*
NOTE: Map 'Zoom Level' generals:
1: World
5: Landmass/continent
10: City
15: Streets
20: Buildings
*/

function renderMap(locations) {
   console.log("In renderMap()");
   console.log(locations);
   // console.log(orgLoc);
   // console.log(destLoc);

   map = new google.maps.Map(document.getElementById('map'), {
      // center: {lat: -34.397, lng: 150.644},
      center: locations[0],
      zoom: 7
   });


   // map.setCenter(results[0].geometry.location);//center the map over the result
   //place a marker at the location
   var orgMarker = new google.maps.Marker({
      map: map,
      position: locations[0]
   });

   var destMarker = new google.maps.Marker({
      map: map,
      position: locations[1]
   });
}



// call setRoute() in render map, send locations array from renderMap()




var routes = new google.maps.DirectionsService();
var renderer = new google.maps.DirectionsRenderer();


function setRoute(){


   var requestObj = {};
   requestObj.origin = "";
   requestObj.destination = "";
   requestObj.travelMode = ""; // ???????????* (ex: DRIVING , WALKING , BICYCLING , TRANSIT)

   // routes.route();

   routes.route(requestObj, function(result, status){
      if (status === google.maps.DirectionsService.OK) {
         //
      } else {
         alert("Something went wrong. Status: " + status);
      }
   });

}






// var requestObj = {};
// requestObj.origin = "";
// requestObj.destination = "";
// requestObj.travelMode = ""; // ???????????* (ex: DRIVING , WALKING , BICYCLING , TRANSIT)


















































// function initMap(orgLoc, destLoc) {
//    console.log("In initMap()");
//    console.log(orgLoc);
//    console.log(destLoc);
//
//    map = new google.maps.Map(document.getElementById('map'), {
//       // center: {lat: -34.397, lng: 150.644},
//       center: orgLoc,
//       zoom: 8
//    });
//
//
//    // map.setCenter(results[0].geometry.location);//center the map over the result
//    //place a marker at the location
//    var orgMarker = new google.maps.Marker({
//       map: map,
//       position: orgLoc
//    });
//
//    var destMarker = new google.maps.Marker({
//       map: map,
//       position: destLoc
//    });
// }
//
//
// // get coordinates from user.
// //
// // set to variable
// //
// // send var to init-Map function
// //
// // center map on coord variable
// //
// // render map.
//
// var geocoder = new google.maps.Geocoder();
//
// function getLocation(){
//    var originCoord;
//    var destCoord;
//    var coordinates;
//
//    var locs = [];
//    var coords = [];
//
//    var originLoc = $("#origin-loc").val();
//    var destinationLoc = $("#destination-loc").val();
//
//    locs.push(originLoc);
//    locs.push(destinationLoc);
//
//    console.log(locs);
//
//    // console.log(originLoc);
//    // console.log(destinationLoc);
//
//    $("#origin-loc").val('');
//    $("#destination-loc").val('');
//
//
//    // originCoord = getCoords(originLoc, function(){
//    //    coords.push(originCoord);
//    // });
//    // destCoord = getCoords(destinationLoc, function (){
//    //    coords.push(destCoord);
//    // });
//    //
//    // return coords;
//    for (var i = 0; i <= locs.length-1; i ++) {
//       coordinates = getCoords(locs[i]);
//       coords.push(coordinates);
//       console.log(coords);
//       if (coords.length === locs.length) {
//          console.log("In 'if'...");
//          console.log(coords);
//       }
//    }
//
//    // originCoord = getCoords(originLoc);
//    // coords.push(originCoord);
//    // console.log("After first Geocode.");
//    //
//    // destCoord = getCoords(destinationLoc);
//    //
//    // coords.push(destCoord);
//    // console.log("When 2nd Geocoding is done.");
//    // console.log(coords);
//    // // return coords;
//
//
//
//
//
//    // geocoder.geocode({address: originLoc}, function(results, status){
//    //    if (status === google.maps.GeocoderStatus.OK){
//    //
//    //       var latitude = results[0].geometry.location.lat();
//    //       var longitude = results[0].geometry.location.lng();
//    //
//    //       // var location = {};
//    //       originCoord = {};
//    //       originCoord.lat = latitude;
//    //       originCoord.lng = longitude;
//    //
//    //       console.log(originCoord);
//    //
//    //       coordinates.push(originCoord);
//    //       // initMap(location);
//    //
//    //
//    //       // map.setCenter(results[0].geometry.location);//center the map over the result
//    //       // //place a marker at the location
//    //       // var marker = new google.maps.Marker({
//    //       //    map: map,
//    //       //    position: results[0].geometry.location
//    //       // });
//    //    } else {
//    //       alert('Geocode was not successful for the following reason: ' + status);
//    //    }
//    // });
//
//
//
//    // geocoder.geocode({address: destinationLoc}, function(results, status){
//    //    if (status === google.maps.GeocoderStatus.OK){
//    //
//    //       var latitude = results[0].geometry.location.lat();
//    //       var longitude = results[0].geometry.location.lng();
//    //
//    //       // var location = {};
//    //       destCoord = {};
//    //       destCoord.lat = latitude;
//    //       destCoord.lng = longitude;
//    //
//    //       console.log(destCoord);
//    //
//    //       coordinates.push(destCoord);
//    //       // initMap(location);
//    //
//    //
//    //       // map.setCenter(results[0].geometry.location);//center the map over the result
//    //       // //place a marker at the location
//    //       // var marker = new google.maps.Marker({
//    //       //    map: map,
//    //       //    position: results[0].geometry.location
//    //       // });
//    //    } else {
//    //       alert('Geocode was not successful for the following reason: ' + status);
//    //    }
//    // });
//
//    // console.log(originCoord);
//    // console.log(destCoord);
//    //
//    // console.log(coordinates);
//
//
//    // $.when(originCoord !== undefined && destCoord !== undefined).then(function(){
//    //    initMap(originCoord, destCoord);
//    //
//    // });
//    // initMap(coordinates);
//
// }
//
// function getCoords(loc){
//    geocoder.geocode({address: loc}, function(results, status){
//       if (status === google.maps.GeocoderStatus.OK){
//
//          console.log("Geocoding Done.");
//
//          var latitude = results[0].geometry.location.lat();
//          var longitude = results[0].geometry.location.lng();
//
//          // var location = {};
//          coord = {};
//          coord.lat = latitude;
//          coord.lng = longitude;
//
//          // console.log(coord);
//
//          // coordinates.push(destCoord);
//          // initMap(location);
//          return coord;
//
//
//       } else {
//          alert('Geocode was not successful for the following reason: ' + status);
//       }
//    });
// }
//
//
//
