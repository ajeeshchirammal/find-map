//Install express server
const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios").default;
const app = express();
app.use(express.static(__dirname + "/dist/map"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/map/index.html"));
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000);
