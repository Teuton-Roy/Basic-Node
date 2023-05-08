//import express-async-handler
const asyncHandler = require('express-async-handler')
//import contact model
const Contact = require('../models/contactModel')

//@Description: Get All Contacts
//@Route: GET /api/contacts
//@Access: Private
const getContacts =asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json({contacts})
})

//@Description: create new Contacts
//@Route: POST /api/contacts
//@Access:  Private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    //Destructure the request body. If name, email and phone any one missing then it is occured
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error('Please provide name, email and phone!')
    }
    //If all the fields are present then create a new contact
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })

    res.status(201).json(contact)
})

//@Description: Get Contact
//@Route: GET /api/contacts/:id
//@Access:  Private

/*
params is a property of the request object.
req.params.id is the id of the contact to be updated/delete/get etc.
*/
const getContact =asyncHandler  (async (req, res) => {
    //get individual contact by id
    const contact = await Contact.findById(req.params.id)
    //if don't find any contact then throw a error
    if(!contact){
        res.status(404)
        throw new Error('Contact not found!')
    }
    res.status(200).json(contact)
})

//@Description: Update Contact
//@Route: PUT /api/contacts/:id
//@Access:  Private
const updateContact = asyncHandler (async (req, res) => {
    //inorder to update a contact first fetch the contact
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('Contact not found!')
    }
    
    //before update check if the contact is available or not
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error('You are not authorized to update this contact!')
    }

    //if contact is found then update the contact
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(updatedContact)
})

//@Description: Delete Contact
//@Route: DELETE /api/contacts/:id
//@Access:  Private
const deleteContact = asyncHandler (async (req, res) => {
    //for delete first fetch the contact which is available in our database
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error('Contact not found!')
    }
     //before delete check if the contact is available or not
     if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error('You are not authorized to delete this contact!')
    }

    //if contact is available then remove
    const deletedContact = await Contact.findByIdAndDelete(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(200).json(deletedContact)
})

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