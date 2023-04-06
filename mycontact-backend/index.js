//create s express server   
const express = require('express')
const dotenv = require('dotenv').config()
//import the error handler
const errorHandler = require('./middleware/errorhandler')
//import the database connection
const connectDb = require('./config/dbconnection')


//create an express app
const app = express()

//Call the database connection
connectDb()

//define a port (const port = 8080)
const port = process.env.PORT || 8080

//configure the express app to use json
app.use(express.json()) //app.use() is known as middleware function between the request and response

//create a route for the default URL
app.use('/api/contacts', require('./routes/contactRoutes')) //app.use() is known as middleware function between the request and response

// routing for Authentication
app.use('/api/users', require('./routes/userRoutes')) //app.use() is known as middleware function between the request and response 

//use the midddleware function errorHandler
app.use(errorHandler)

/*
app.get('/api/contacts', (req, res) => {
     // res.send('get all contacts')
     res.status(200).json({message: 'get all contacts'})
}); 
*/

//now we can have listen on the app on the port 8080
app.listen(port, () =>{ //callback function
    console.log(`Server is running on port ${port}`);
}) 