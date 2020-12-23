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
  console.log(response[0].region);
  //console log to receive specific region based on array position. use for drop down population
});
//completes initial call to receive region/country listings.
