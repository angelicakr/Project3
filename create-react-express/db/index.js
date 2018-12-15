
//connect to MongoDB

const mongoose = require("mongoose");
const MONGO_LOCAL_URL = "mongodb://localhost/sticky";
const MONGO_URL = process.env.MONGODB_URI || MONGO_LOCAL_URL;

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL)
.then(() => console.log("Connected to database(MongoDB)"))
.catch(err => console.log(err));


//module.exports.(this is where schema goes) = require('this is where path to schema goes');
module.exports.Sticky = require('./models/stickies.js')