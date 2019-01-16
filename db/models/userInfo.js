const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Schema
// Account sign-up

const userSchema = new Schema({
    FirstName: { type: String, unique: false },
    lastName:{ type: String, unique:false},
    userId: { type: String, unique: false },
    password: { type: String, unique: false },
    email: { type: String, unique: false },
	
});

//db.userSchema

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
