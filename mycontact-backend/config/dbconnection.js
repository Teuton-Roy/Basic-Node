//import mongoose
const mongoose = require('mongoose')

//connect to mongodb
const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('Database connected', 
            connect.connection.host, 
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1) //exit with failure
    }
}

//export the connectDB
module.exports = connectDB