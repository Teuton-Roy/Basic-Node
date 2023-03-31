//import constants
const constants = require('../routes/constants')

//create constant error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    //set the status code using switch case
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation Failed",message: err.message, stackTrace: err.stack})
            break;
        case constants.NOT_FOUND :
            res.json({title:"Not Found!",message: err.message, stackTrace: err.stack})
        
        case constants.UNAUTHORIZED :
            res.json({title:"Unauthorized",message: err.message, stackTrace: err.stack})
        
        case constants.FORBIDDEN :
            res.json({title:"Forbidden",message: err.message, stackTrace: err.stack})
        
        case constants.INTERNAL_SERVER_ERROR :
            res.json({title:"Server_Error",message: err.message, stackTrace: err.stack})

        default:
            console.log("No Error, Everything is fine!");
            break;
    }
    //stackTrace is the stack trace of the error object means the line of code where the error occured.
}

//export the error handler
module.exports = errorHandler