//import mongoose
const mongoose = require('mongoose')

//create schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
}, 
    {
    timestamps: true
}
);



//exports model
module.exports = mongoose.model('Contact', contactSchema)