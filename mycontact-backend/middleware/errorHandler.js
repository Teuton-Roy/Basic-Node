//create constant error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.json({message: err.message, stackTrace: err.stack})
    //stackTrace is the stack trace of the error object means the line of code where the error occured.
}

//export the error handler
module.exports = errorHandler