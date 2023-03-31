//create constant error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    //set the status code using switch case
    switch (statusCode) {
        case 400:
            res.json({title:"Validation Failed",message: err.message, stackTrace: err.stack})
            break;
        case 404:
            res.json({title:"Not Found!",message: err.message, stackTrace: err.stack})

        default:
            break;
    }
    //stackTrace is the stack trace of the error object means the line of code where the error occured.
}

//export the error handler
module.exports = errorHandler