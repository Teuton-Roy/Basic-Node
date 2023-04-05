//import asyncHandler from 'express-async-handler'
const asyncHandler = require('express-async-handler')
//import the jwt
const jwt = require('jsonwebtoken')

const validateToken = asyncHandler(async (req, res, next) => {
    let token
    //check if the token is available in the request header
    let authHeader = req.headers.Authorization || req.headers.authorization

    if(authHeader && authHeader.startsWith('Bearer')){
        token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
            if(err){
                res.status(401)
                throw new Error('Not authorized, token failed')
            }
            req.user = decoded.user
            next()
        })
        //check if the token is available in the request header
        if(!token){
            res.status(401)
            throw new Error('Not authorized, no token')
        }
    }
})


//export the validateToken
module.exports = validateToken