
const express = require('express');
const path = require('path');
const router = express.Router();
const routes = require('./routes')
const bodyParser = require ('body-parser');
const db = require ('./db');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
