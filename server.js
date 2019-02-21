var http = require("http");
var express = require("express");
var app = express();
var path = require("path");

var port = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create ajax routes.
app.get("/", function (req, res) {
   res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function (req, res) {
   res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
   res.sendFile(path.join(__dirname, "view.html"));
});

//Displays api reservations
app.get("/api/tables", function (req, res) {

});

app.get("/api/waitlist", function (req, res) {

});





app.listen(port, function () {
   console.log("listening on localhost:" + port);
});