const settings = {
  async: true,
  crossDomain: true,
  url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list",
  method: "GET",
  headers: {
    "x-rapidapi-key": "14b895456cmsh77367b1f7069abdp10c0b9jsnaf21050df356",
    "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
  },
};
$.ajax(settings).done(function (response) {
  for (var i = 0; i < response[0].countries.length; i++) {
    console.log(response[0].countries[i].name);
  }
  for (var i = 0; i < response[1].countries.length; i++) {
    console.log(response[1].countries[i].name);
  }
  for (var i = 0; i < response[2].countries.length; i++) {
    console.log(response[2].countries[i].name);
  }
  for (var i = 0; i < response[3].countries.length; i++) {
    console.log(response[3].countries[i].name);
  }
});
//completes initial call to receive region/country listings.
