import { cleanUI } from "./cleanUI";

const msDay = 1000 * 60 * 60 * 24;
let diffDays;
let diffEnd;
let diffAll;
let diffStart;
function dateDif(datSta, datEnd) { // calculate day difference
  var date1 = new Date(datSta);
  var date2 = new Date(datEnd);
  diffDays = Math.abs((date1.getTime() - date2.getTime()) / msDay);
  return diffDays;
}

function dateValid(diffDays) { // checking day difference to ensure API can predict weather (max 16 days)
  if (diffDays < 1 || diffDays > 16) {
    alert("Difference between days should be maximum 15 days");
    cleanUI();
  }
}

function dateMax(now, end, start) { // since used API works for max 16 days here is the function to check it.
  var date3 = new Date(now);
  var date2 = new Date(end);
  var date1 = new Date(start);
  diffEnd = Math.abs((date3.getTime() - date2.getTime()) / msDay);
  diffAll = date1.getTime() - date2.getTime();
  diffStart = Math.abs((date1.getTime() - date3.getTime()) / msDay);
  if (diffEnd > 15) {
    alert("Latest date can be maximum 15 days later than today");
    cleanUI();
  } else if (diffAll >= 0) { // to check departure day is earlier than return day
    alert("Departure date should be earlier than return date");
    cleanUI();
  } else { // if everything is ok, writes how many days left to DOM
    var para = document.createElement("P");
    para.setAttribute("id", "info-text");
    var t = document.createTextNode(
      "Your trip starts in: " + diffStart + " days"
    );
    para.appendChild(t);
    document.getElementById("info-zone").appendChild(para);
  }
}

export { dateDif };
export { dateValid };
export { dateMax };
export { diffEnd };
export { diffDays };
export { diffAll };
export { diffStart };
