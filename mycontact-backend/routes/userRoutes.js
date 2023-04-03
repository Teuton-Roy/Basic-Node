//import express
const express = require('express')
//import userControllers
const {registerUser,loginUser,currentUser} = require('../controllers/userControllers')

//router
const router = express.Router()

//register route
router.post('/register',registerUser)

//login route
router.post('/login', loginUser)

//current user route
router.get('/current', currentUser)


//export the router
module.exports = router