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

//Displays api reservation tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// Displays api waitlist
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});


// Reservation Tables (DATA)
//==================================================
var tables = [
    {
      name: "lance",
      phoneNumber: 3,
      email: "lance.rush1@gmail.com",
      uniqueId: "F33GDL",
    },
    {
      name: "jay",
      phoneNumber: 44,
      email: "jaysgottoloveit@gmail.com",
      uniqueId: "F33SSDL",
    }
  ];


  // Waitlist (DATA)
  var waitlist = [
    {
        name: "lance",
        phoneNumber: 3,
        email: "lance.rush1@gmail.com",
        uniqueId: "F33GDL",
      },
  ];



  // Create new reservation
  app.post("/api/tables", function(req, res) {
    var reservation = req.body;

      reservation.routeName = reservation.name.replace(/\s+/g,"").toLowerCase();

          if(reservation.length <= 5) {
            tables.push(reservation);
        } else {
            waitlist.push(reservation);
        }
  
        res.json(reservation);

      
  });





// Runs server
app.listen(port, function () {
   console.log("listening on localhost:" + port);
});