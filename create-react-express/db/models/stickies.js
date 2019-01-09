const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema

//Company name,Billing date, Amount, Recurring or not?, How many days for the trial

const stickySchema = new Schema({
	companyName: { type: String, unique: false },
    amount: { type: Number, unique: false },
    ocurrence: { type: Number, unique: false },
    billingDate: { type: Date, unique: false },
	
});

//db.stickySchema

const Sticky = mongoose.model('Sticky', stickySchema);
module.exports = Sticky;
