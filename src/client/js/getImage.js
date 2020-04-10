import axios from "axios";
import { cleanUI } from "./cleanUI";

function getImage(city) { //gets relevant city image
  var newImage = axios
    .get(
      "https://pixabay.com/api/?key=15954387-f43eb4ca04adb1802954ecc04&q=" +
        city +
        "&image_type=photo&min_height=320&min_width=320"
    )
    .then(function (response) {
      var imageOrder = Math.floor(Math.random() * 11); //gets a random image every time
      var locImage = response.data.hits[imageOrder].webformatURL;
      locImage = locImage.replace("_640", "_340"); //this is the max width setting, default value is 640
      console.log(locImage);
      var img = new Image();
      img.src = locImage;
      document.getElementById("image-zone").appendChild(img);
    })
    .catch(function (error) {
      alert("Please enter a valid destination"); //if destination is invalid, get request fails most of the time
      cleanUI();
    });
}

export { getImage };
