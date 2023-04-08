const express = require('express')
const router = express.Router()

//import the get contacts
// const getContacts = require('../controllers/contactControllers')
//import the create contact
// const createContact = require('../controllers/contactControllers')
//import the get contact
// const getContact = require('../controllers/contactControllers')
//import the update contact
// const updateContact = require('../controllers/contactControllers')
//import the delete contact
// const deleteContact = require('../controllers/contactControllers')

//import all controller functions
const {getContacts, createContact, getContact, updateContact, deleteContact} = require('../controllers/contactControllers')
//import the validateToken
const validateToken = require('../middleware/ValidateTokenHandler')

//ValidateToken
router.use(validateToken)

//config the routes
router.route('/').get(getContacts)

//route for the post request to create a contact
router.route('/').post(createContact);


//route for the get request for individual contact
router.route('/:id').get(getContact);


//route for the put request to update a contact
router.route('/:id').put(updateContact);


//route for the delete request to delete a contact
router.route('/:id').delete(deleteContact);

//export the router
module.exports = router