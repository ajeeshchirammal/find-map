//Install express server
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios").default;
const app = express();
const key = "AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw";
const mapApi =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";

// Serve only the static files form the dist directory
// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin) {
//             return callback(null, true);
//         }

//         if (whitelist.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }

// // end
// app.use(cors(corsOptions));
app.use(express.static(__dirname + "/dist/map"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/map/index.html"));
});

// 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + param + '&types=geocode&language=fr&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw'
// 'https://maps.googleapis.com/maps/api/geocode/json?address=' + param + '&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw'
//https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + param.lat + ',' + param.lng + '&radius=1000&types=atm&&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw'
// 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + param.lat + ',' + param.lng + '&sensor=true&key=AIzaSyBepSqGpxHGCUDJvHf_f9dX99Af2Id75zw'

app.get("/autocomplete", async (req, res) => {
  const { input } = req.query;
  if (input) {
    try {
      let data = await axios
        .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&language=en&key=${key}`
        )
        .then((response) => response.data);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
});

app.get("/address", async (req, res) => {
  const { input } = req.query;
  if (input) {
    try {
      let data = await axios
        .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${key}`
        )
        .then((response) => response.data);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
});
app.get("/nearbysearch", async (req, res) => {
  const { lat, lng } = req.query;
  if (lat && lng) {
    try {
      let data = await axios
        .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&types=atm&key=${key}`
        )
        .then((response) => response.data);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
});

app.get("/latlngAddress", async (req, res) => {
  const { lat, lng } = req.query;
  if (lat && lng) {
    try {
      let data = await axios
        .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${key}`
        )
        .then((response) => response.data);
      return res.send(data);
    } catch (err) {
      return res.status(500).send(err);
    }
  }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
