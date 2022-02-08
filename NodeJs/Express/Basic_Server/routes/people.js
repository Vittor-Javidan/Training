const express = require('express')
const router = express.Router()

//Functions requires
const {
    getPeople, 
    createPerson, 
    updatePerson, 
    deletePerson
} = require('../controllers/people')

//URL routes
router.route('/')
    .get(getPeople)
    .post(createPerson)
    
router.route('/:id')
    .put(updatePerson)
    .delete(deletePerson)
//

//Export
module.exports = router