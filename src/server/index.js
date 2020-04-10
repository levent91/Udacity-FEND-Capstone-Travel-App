var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var axios = require("axios");
const Geonames = require("geonames.js");
var pixabay = require("pixabay-api");
let weatherbit = require("@datafire/weatherbit").create();
let geokey;
app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});
const geonames = new Geonames({
  username: "levent1991",
  lan: "en",
  encoding: "JSON",
});

var port = 9010;
app.listen(port, function () {
  console.log("App listening on port " + port);
});

module.exports = app;
