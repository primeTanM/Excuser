var express = require("express");
var excusesRepository = require("./excuseRepository");
var app = express();
var port = process.env.PORT || 3000;

app.all("*", function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", function (req, res) {
  res.send("<h1>Excuse Generator</h1>");
});

app.get("/v1", function (req, res) {
  res.send("<h1>This is ithe initial verison...</h1>");
});

// returns the excuse having the specific id
app.get("/v1/excuse/id/:num(\\d+)?", function (req, res) {
  res.send(excusesRepository.getByID(req.params.num));
});

// returns random excuses
app.get("/v1/excuse/:num(\\d+)?", function (req, res, next) {
    // res.send("hello");
  res.send(excusesRepository.getRandom(req.params.num || 1));
});

app.get("/v1/excuse/:category", function (req, res, next) {
    res.send(excusesRepository.getByCategory(req.params.category, 1));
  });

app.get("/v1/excuse/:category/:num(\\d+)?", function (req, res, next) {
  res.send(excusesRepository.getByCategory(req.params.category, req.params.num || 1));
});


app.listen(port, function () {
  console.log("Server running on port", port);
});
