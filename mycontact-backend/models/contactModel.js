//import mongoose
const mongoose = require('mongoose')


//create schema
const contactSchema = new mongoose.Schema({
    //user id and this id will be for the user who created the contact
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
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