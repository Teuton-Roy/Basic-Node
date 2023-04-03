//import express-aysnc-handler
const asyncHandler = require('express-async-handler')

//@Description: Register a new user
//@Route: POST /api/users/register
//@Access: Public
const registerUser = asyncHandler(async (req, res) => {
    res.json({message: 'Register the user'})
})

//@Description: Login a new user
//@Route: POST /api/users/login
//@Access: Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login the user'})
})

//@Description: Current a new user
//@Route: GET /api/users/current
//@Access: Public
const currentUser = asyncHandler(async (req, res) => {
    res.json({message: 'Get the current user'})
})

//export the userControllers
module.exports = {
    registerUser,
    loginUser,
    currentUser
    }