const express = require('express')
const app = express()
const PORT = 5000

//router require
const people = require('./routes/people')
const auth = require('./routes/auth')

//midleeares require
const logger = require('./middleware/logger')

//Static assets
app.use(express.static('./methods-public'))

//parse urlEncoded and json request
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//midlewares
app.use(logger)

//routers
app.use('/api/people', people)
app.use('/login', auth)

//Server Listener
app.listen(PORT, () => {
    console.log(`Server is listening the port ${PORT}`)
})