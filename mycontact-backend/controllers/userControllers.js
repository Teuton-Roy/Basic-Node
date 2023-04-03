//import express-aysnc-handler
const asyncHandler = require('express-async-handler')
//import the user model
const User = require('../models/userModel')
//import bcrypt for password hashing
const bcrypt = require('bcrypt')
//import jsonwebtoken for token generation
const jwt = require('jsonwebtoken')

//@Description: Register a new user
//@Route: POST /api/users/register
//@Access: Public
const registerUser = asyncHandler(async (req, res) => {
    //destructure the request body for username, email and password information
    const {username, email, password} = req.body
    //check if the username, email and password are provided
    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please provide username, email and password')
    }
    //check if the user already exists
    const userAvailable = await User.findOne({email})
    //if the user exists, throw an error
    if(userAvailable){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash the password
    const hashedPassword = await bcrypt.hash(password, 10) //10 is the salt
    //salt: a random string of characters that is added to the password before hashing
    console.log("Hashed Password",hashedPassword);

    //create a new user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`User created ${user}`);
    //if the user is created successfully, send the response
    if(user){
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            // isAdmin: user.isAdmin,
            // token: null
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
    res.json({message: 'Register the user'})
})

//@Description: Login a new user
//@Route: POST /api/users/login
//@Access: Public
const loginUser = asyncHandler(async (req, res) => {
    //fetch the email and password from the request body
    const {email, password} = req.body
    //check if the email and password are provided
    if(!email || !password){
        res.status(400)
        throw new Error('Please provide email and password')
    }
    //check if the user exists in the database
    const user = await User.findOne({email})
    //now compare the password in the database with the password provided by the user
    if(user && (await bcrypt.compare(password, user.password))){
        //if the password matches, generate a token
        const accessToken = jwt.sign({
            user:{
                name: user.username,
                email: user.email,
                _id: user._id
            },
        },
            process.env.ACCESS_TOKEN_SECERT, 
            {expiresIn: '1m'}
        )
        //send the token to the client
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
    // res.json({message: 'Login the user'})
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

/* 
  "email":"aaaa@gmail.com",
  "password":"Teuton@9041"
*/