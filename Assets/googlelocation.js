//  $(document).ready(function () {

var APIkey = "AIzaSyDFqLVGxOY_BxTgchqz4BJbIbq4qIyET_g";

// Try HTML5 geolocation.
let currentLoc;
let map, infoWindow;

function initMap() {

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
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


//Google Places
let map1, infoWindow1;
function places() {
  // https:maps.googleapis.com/maps/api/place/findplacefromtext/json?input=H&M&inputtype=textquery&fields=formatted_address,name,opening_hours,geometry&key=APIkey
  var queryURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Hennes%20&%20Mauritz&inputtype=textquery&fields=formatted_address,name,opening_hours,geometry&key=AIzaSyDFqLVGxOY_BxTgchqz4BJbIbq4qIyET_g`;
  $.ajax({
    method: "GET",
    url: queryURL,
  }).then(function (response) {
    console.log(response);
    var latStore = response.candidates[0].geometry.location.lat;
    var lngStore = response.candidates[0].geometry.location.lng;
    console.log(latStore);
    console.log(lngStore);
    map1 = new google.maps.Map(document.getElementById("location"), {
      center: { lat: latStore, lng: lngStore },
      zoom: 15,
    });
    infoWindow1 = new google.maps.InfoWindow();
  });
  const myLatLng = { lat: latStore, lng: lngStore };
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });
}
places();



//  });
