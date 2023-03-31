//@Description: Get All Contacts
//@Route: GET /api/contacts
//@Access: Public

const getContact =  (req, res) => {
    res.status(200).json({message: 'Get all contacts'})
};

const createContact = (req, res) => {
    res.status(200).json({message: 'Create contact'})
}

//exprot the getContact function
module.exports = getContact
module.exports = createContact