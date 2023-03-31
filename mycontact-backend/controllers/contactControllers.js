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
//@Route: GET /api/contacts
//@Access: Public
const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

//@Description: Update Contact
//@Route: PUT /api/contacts
//@Access: Public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact ${req.params.id}`})
}

//exprot the controller functions
module.exports = getContacts
module.exports = createContact
module.exports = getContact
module.exports = updateContact