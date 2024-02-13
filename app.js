const request = require("request");
const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=YZDSX5C78XFVFM2DSYBHR9FYA'

request({url : url , json: true}, function (error, response, body) {
  if (error) {
        console.log("Unable to connect to weather services");
    } else if (body.error){
        console.log("Unable to fetch data. Kindly check url");
    } else {
      console.log(
        `The temperature in ${body.address} is ${body.currentConditions.temp} F and there is ${body.currentConditions.precipprob}% chance of rain`
      )}
})


const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?limit=1&access_token=pk.eyJ1IjoidGFydW5wYXJtYXI3NTIyIiwiYSI6ImNsZjkxbTBmOTF1bngzd29jMHNpcWJtMjgifQ.ejy6DHoYagrQLZzp9F_SVQ";

request({url : geocodeUrl , json: true}, function (error, response, body) {
  if (error) {
        console.log("Unable to connect to location services")
    } else if (body.features.length === 0){
        console.log("Unable to find such location")
    } else {
    console.log(
      `The  coordinates for ${body.features[0].place_name} is ${body.features[0].geometry.coordinates[1]} latitude and ${body.features[0].geometry.coordinates[0]} longitude `
    )}
});
