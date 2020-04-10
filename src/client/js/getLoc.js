import axios from "axios";
import { getWeather } from "./getWeather";
import { dateDif, dateValid } from "./dateDif";
import { dateMax } from "./dateDif";
import { diffDays } from "./dateDif";
import { getImage } from "./getImage";
import { checkInput } from "./checkInput";
import { cleanUI } from "./cleanUI";

let coords = []; //declaring vars
let username = "levent1991";
let endDate;
let loc;
let startDate;
let city;
let today = new Date().toISOString().slice(0, 10);

function getLoc(event) {
  event.preventDefault();
  var cleanP = document.getElementById("info-zone"); //cleans the information and image zone if there is another request
  cleanP.querySelectorAll("*").forEach((n) => n.remove());
  var cleanI = document.getElementById("image-zone");
  cleanI.querySelectorAll("*").forEach((n) => n.remove());
  city = document.getElementById("loc").value;
  city = city.replace(/\s+/g, "+"); //removes space with + for city names like New York
  startDate = document.getElementById("startDate").value;
  endDate = document.getElementById("endDate").value;
  loc = document.getElementById("loc").value;
  dateDif(startDate, endDate); //calculates date difference - dateDifjs line 8
  dateValid(diffDays); //validates the dates - dateDifjs line 15
  var geolist = axios
    .get(
      "http://api.geonames.org/searchJSON?name=" +
        loc +
        "&maxRows=1&username=" +
        username
    ) //gets location data
    .then(function (response) {
      console.log(response);
      var geolist1 = response.data;
      console.log(geolist1.geonames);
      coords[0] = geolist1.geonames[0].lat; // array stores lat and long
      coords[1] = geolist1.geonames[0].lng;
      console.log(coords);
      getWeather(coords[0], coords[1], endDate, diffDays); //gets the weather prediction for enddate - date difference. getweatherjs line4
      getImage(city); // gets the relevant city image. getimagejs line 4
    })
    .catch(function (error) {
      alert("Please enter a valid location"); //if location is invalid error pops
      cleanUI();
    })
    .then(function () {
      dateMax(today, endDate, startDate); //some sort of date validator to make sure time frame is next 16 days. datedif line 22
      checkInput(startDate, endDate, loc); //checks if inputs are empty or not and contains relevant characters.
    });
}

export { getLoc };
