//@Description: Get All Contacts
//@Route: GET /api/contacts
//@Access: Public

const getContact =  (req, res) => {
    res.status(200).json({message: 'Get all contacts'})
};

//@Description: create new Contacts
//@Route: POST /api/contacts
//@Access: Public
const createContact = (req, res) => {
    res.status(201).json({message: 'Create contact'})
}

//exprot the controller functions
module.exports = getContact
module.exports = createContact