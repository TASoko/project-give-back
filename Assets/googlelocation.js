// $(document).ready(function () {

// var location = "";
var APIkey = "AIzaSyDFqLVGxOY_BxTgchqz4BJbIbq4qIyET_g";

// var queryURL = ``
// https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters

//locationButton.addEventListener("click", () => {
// Try HTML5 geolocation.
let currentLoc;
let map, infoWindow;

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
  function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(
      locationButton
    );
  
    locationButton.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            currentLoc = pos;
            console.log(pos);

            console.log("currentLoc is:", currentLoc);


            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
      }
    });
  }
  
  // var curLoc = getLocation();
  
  // console.log(curLoc);

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

function posVar() {
  return new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(pos => { 
      resolve(pos)
    });  
 });
  }

async function asyncCall() {
  console.log("calling");
  // initMap ()
   var result = await posVar();
   console.log(result);
};

asyncCall();
  // expected output: "resolved"


  // function geoPromise(){
  //   return new Promise(resolve => {
  //      navigator.geolocation.getCurrentPosition(pos => { 
  //        resolve(pos)
  //      });  
  //   });
  // }
  // async function getPos(){ 
  //   console.log("calling get pos");
  //   var thePos = await geoPromise();
  //   console.log(thePos);
  // }
  // getPos();





// });
