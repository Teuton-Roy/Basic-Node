//impoer mongoose
const mongoose = require('mongoose')

//create a schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    date: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
    }
);

//export the model
module.exports = mongoose.model('User', userSchema);