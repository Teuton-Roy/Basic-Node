const express = require('express')
const router = express.Router()

//config the routes
router.route('/').get((req, res) => {
    res.status(200).json({message: 'Get all contacts'})
});

//route for the post request to create a contact
router.route('/').post((req, res) => {
    res.status(200).json({message: 'Create contact'})
});


//route for the get request for individual contact
router.route('/').get((req, res) => {
    res.status(200).json({message: `Get contact for $(req.params.id)`})
});


//route for the put request to update a contact
/*
params is a property of the request object
req.params.id is the id of the contact to be updated
*/
router.route('/:id ').put((req, res) => {
    res.status(200).json({message: `Update contact ${req.params.id}`})
});


//route for the delete request to delete a contact
router.route('/:id').delete((req, res) => {
res.status(200).json({message: `Delete contact ${req.params.id}`})
});

//export the router
module.exports = router