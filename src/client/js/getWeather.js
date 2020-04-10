import axios from "axios";
import { cleanUI } from "./cleanUI";

function getWeather(lat, lng, endDate, diff) { // according to API forecast is for max 16 days // https://www.weatherbit.io/api/weather-forecast-16-day
  var weatherDates = []; // declaring arrays in ugly way
  var weatherTemp = [];
  var weatherPrecip = [];
  var weatherText = [];
  var selectedDates = [];
  var selectedTemp = [];
  var selectedText = [];
  var selectedPrecip = [];
  var selectedLoc;
  axios
    .get(
      "https://api.weatherbit.io/v2.0/forecast/daily?lat=" +
        lat +
        "&" +
        "lon=" +
        lng +
        "&key=71444039f1b74baa899aa090ed2cb0a7"
    ) // coords to get forecast
    .then(function (response) {
      var weatherlist1 = response.data;
      selectedLoc = weatherlist1.city_name; //identifying location
      for (var i = 0; i < 16; i++) { // filling arrays with relevant info
        weatherDates.push(weatherlist1.data[i].datetime);
        weatherTemp.push(weatherlist1.data[i].temp);
        weatherPrecip.push(weatherlist1.data[i].precip);
        weatherText.push(weatherlist1.data[i].weather.description);
      }
      for (var i = 0; i < 16; i++) { //finding travel end date
        if (weatherDates[i] == endDate) {
          selectedDates.push(weatherDates[i]);
          selectedTemp.push(weatherTemp[i]);
          selectedPrecip.push(weatherPrecip[i]);
          selectedText.push(weatherText[i]);
          for (var y = 1; y < diff + 1; y++) { //recounting travel duration from end dates
            selectedDates.push(weatherDates[i - y]);
            selectedTemp.push(weatherTemp[i - y]);
            selectedPrecip.push(weatherPrecip[i - y]);
            selectedText.push(weatherText[i - y]);
          }
        }
      }
      selectedDates = selectedDates.reverse(); //reversing arrays to print it from day 1 to day 16 instead of reverse
      selectedTemp = selectedTemp.reverse();
      selectedPrecip = selectedPrecip.reverse();
      selectedText = selectedText.reverse();
      for (i = 0; i < selectedDates.length; i++) { //posting the results to DOM
        var para = document.createElement("P");
        para.setAttribute("id", "day-" + i);
        var t = document.createTextNode(
          "Day-" +
            (i + 1) +
            ") Date: " +
            selectedDates[i] +
            " Avg Temp: " +
            selectedTemp[i] +
            "°C Overall: " +
            selectedText[i]
        );
        para.appendChild(t);
        document.getElementById("info-zone").appendChild(para);
        console.log(100 * selectedPrecip[i].toFixed(2)); //this one is to trigger error if starting date is past there is no prec data to make calc.
      }
      var para = document.createElement("P"); //weather data source location
      para.setAttribute("id", "info-text");
      var t = document.createTextNode("Data Location: " + selectedLoc);
      para.appendChild(t);
      document.getElementById("info-zone").appendChild(para);
    })
    .catch(function (error) {
      alert("Earliest day should be today!");
      cleanUI();
    });
}

export { getWeather };
