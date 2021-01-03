//  $(document).ready(function () {

var APIkey = "AIzaSyDFqLVGxOY_BxTgchqz4BJbIbq4qIyET_g";

// Try HTML5 geolocation.
let currentLoc;
let map, infoWindow;

  function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
    infoWindow = new google.maps.InfoWindow();


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
    // });
  }
  

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
  
   var result = await posVar();
   console.log(result);
};

asyncCall();





//  });
