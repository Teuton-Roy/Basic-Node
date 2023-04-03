//import express
const express = require('express')

//router
const router = express.Router()

//register route
router.post('/register', (req, res) => {
    res.json({message: 'Register the user'})
})

//login route
router.post('/login', (req, res) => {
    res.json({message: 'Login the user'})
})

//current user route
router.post('/current', (req, res) => {  
    res.json({message: 'Get the current user'})
})


//export the router
module.exports = router