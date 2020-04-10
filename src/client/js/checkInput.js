import {cleanUI} from "./cleanUI"

function checkInput(start,end,place){ //checks if user typed start and end dates
    if(start === "" || end === "") {
      alert("Please enter a valid date")
      cleanUI();
    }
    else if (place === "" || place.match(/^\d/)) { //checks if user typed city name and it doesnt contain numbers
        alert("Please enter a valid destination")
      cleanUI();
    }
}

export {checkInput}