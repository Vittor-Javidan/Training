const express = require('express')
const router = express.Router()
const { getAllProducts } = require('../controllers/products')

//routes
router.route('/')
    .get(getAllProducts)
//

//Export
module.exports = router