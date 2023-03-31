//@Description: Get All Contacts
//@Route: GET /api/contacts
//@Access: Public

const getContacts =  (req, res) => {
    res.status(200).json({message: 'Get all contacts'})
};

//@Description: create new Contacts
//@Route: POST /api/contacts
//@Access: Public
const createContact = (req, res) => {
    res.status(201).json({message: 'Create contact'})
}

//@Description: Get Contact
//@Route: GET /api/contacts/:id
//@Access: Public

/*
params is a property of the request object.
req.params.id is the id of the contact to be updated/delete/get etc.
*/
const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

//@Description: Update Contact
//@Route: PUT /api/contacts/:id
//@Access: Public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact ${req.params.id}`})
}

//@Description: Delete Contact
//@Route: DELETE /api/contacts/:id
//@Access: Public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact ${req.params.id}`})
}

//exprot the controller functions
module.exports = getContacts
module.exports = createContact
module.exports = getContact
module.exports = updateContact
module.exports = deleteContact