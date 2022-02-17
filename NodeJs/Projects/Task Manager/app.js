const express = require('express')
const app = express()
const start = require('./controllers/server_listener')

//middlewares require
const errorHandler = require('./middleware/error-handler')

//middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routers require
const mainPage = require('./routes/main-page')
const tasks = require('./routes/tasks')
const notFound = require('./routes/not-found')


//routes
app.get('/', mainPage)
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)

//Server Listener
const port = process.env.PORT || 5000
start(port, app)