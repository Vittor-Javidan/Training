const express = require('express')
const router = express.Router()

//Url routes
router.post('/', (req, res) => {

    const {name} = req.body
    console.log(name)
    
    if(name){
        res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send(`Please Provide Credentials`)
    }
})

//Exports
module.exports = router