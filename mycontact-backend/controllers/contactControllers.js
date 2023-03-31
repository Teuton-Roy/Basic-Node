//import express-async-handler
const expressAsyncHandler = require('express-async-handler')

//@Description: Get All Contacts
//@Route: GET /api/contacts
//@Access: Public
const getContacts = async (req, res) => {
    res.status(200).json({message: 'Get all contacts'})
};

//@Description: create new Contacts
//@Route: POST /api/contacts
//@Access: Public
const createContact = async (req, res) => {
    console.log("The request body is: ", req.body);
    //Destructure the request body
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('Please provide name, email and phone!')
    }
    res.status(201).json({message: 'Create contact'})
}

//@Description: Get Contact
//@Route: GET /api/contacts/:id
//@Access: Public

/*
params is a property of the request object.
req.params.id is the id of the contact to be updated/delete/get etc.
*/
const getContact =async (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

//@Description: Update Contact
//@Route: PUT /api/contacts/:id
//@Access: Public
const updateContact = async (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
}

//@Description: Delete Contact
//@Route: DELETE /api/contacts/:id
//@Access: Public
const deleteContact = async (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
}

//exprot the controller functions
// module.exports = getContacts
// module.exports = createContact
// module.exports = getContact
// module.exports = updateContact
// module.exports = deleteContact

module.exports = { 
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
}