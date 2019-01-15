
const express = require('express');
const path = require('path');
const router = express.Router();
const routes = require('./routes');
const passport = require('passport');
const bodyParser = require ('body-parser');
const db = require ('./db');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5001;
const app = express();

const users = require('./controllers/user1');

app.use(passport.initialize());
require('./passport')(passport);

// Bodyparser Middleware
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to MongoDB

const MONGO_LOCAL_URL = "mongodb://localhost:27017/sticky";
const MONGO_URL = process.env.MONGODB_URI || MONGO_LOCAL_URL;

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL)
.then(() => console.log("Connected to database(MongoDB)"))
.catch(err => console.log(err));

app.use(routes);

// app.use('/api/users', users);

// app.get('/', function(req, res) {
//     res.send('hello');
// });


// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
