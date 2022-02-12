const express = require('express')
const router = express.Router()
const {
    getAllProductsStatic,
    getAllProducts
} = require('../controllers/products')

//routes
router.route('/')
    .get(getAllProducts)

router.route('/static')
    .get(getAllProductsStatic)
//

//Export
module.exports = router