const express = require('express')
const router = express.Router()

//config the routes
router.route('/').get((req, res) => {
    res.status(200).json({message: 'get all contacts'})
});

//export the router
module.exports = router