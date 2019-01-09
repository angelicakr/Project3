const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
//Company name,Billing date, Amount, Recurring or not?, How many days for the trial

const stickySchema = new Schema({
	biller: { type: String, unique: false },
    amountPaying: { type: Number, unique: false },
    reoccuring: { type: String, unique: false },
    dateDue: { type: Date, unique: false },
    howOften:{ type: Number, unique:false},
	
});

//db.stickySchema

const Sticky = mongoose.model('Sticky', stickySchema);
module.exports = Sticky;
