function cleanUI() { //cleans UI after alert message
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("loc").value = "";
  setTimeout(function () {
    var cleanI = document.getElementById("image-zone");
    cleanI.querySelectorAll("*").forEach((n) => n.remove());
    var cleanP = document.getElementById("info-zone");
    cleanP.querySelectorAll("*").forEach((n) => n.remove());
  }, 500);
}

export { cleanUI };
