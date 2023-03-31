const express = require('express')
const router = express.Router()

//import the get contacts
const getContacts = require('../controllers/contactControllers')
//import the create contact
const createContact = require('../controllers/contactControllers')
//import the get contact
const getContact = require('../controllers/contactControllers')
//import the update contact
const updateContact = require('../controllers/contactControllers')

//config the routes
router.route('/').get(getContacts)

//route for the post request to create a contact
router.route('/').post(createContact);


//route for the get request for individual contact
router.route('/:id').get(getContact);


//route for the put request to update a contact
router.route('/:id').put(updateContact);


//route for the delete request to delete a contact
router.route('/:id').delete((req, res) => {
    res.status(200).json({message: `Delete contact ${req.params.id}`})
});

//export the router
module.exports = router