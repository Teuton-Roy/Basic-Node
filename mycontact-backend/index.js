//create s express server   

const express = require('express')

//create an express app
const app = express()

//define a port
const port = 8080

//now we can have listen on the app on the port 8080
app.listen(port, () =>{ //callback function
    console.log(`Server is running on port ${port}`);
})