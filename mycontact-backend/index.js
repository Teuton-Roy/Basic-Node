//create s express server   
const express = require('express')
const dotenv = require('dotenv').config()

//create an express app
const app = express()

//define a port (const port = 8080)
const port = process.env.PORT || 8080

//create a route for the default URL

app.use('/api/contacts', require('./routes/contactRoutes')) //app.use() is known as middleware function between the request and response

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