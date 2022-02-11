const express = require('express')
const { route } = require('./tasks')
const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.send('./public/index.html')
    })

module.exports = router