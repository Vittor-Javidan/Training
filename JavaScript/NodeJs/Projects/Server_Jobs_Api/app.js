require('dotenv').config();
require('express-async-errors')
const express = require('express')
const app = express();

// routers
const authRouter = require('./routes/auth')                                                                                                           // require auth Router from routes folder
const jobsRouter = require('./routes/jobs')                                                                                                           // require jobs Router from routes folfer

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
// extra packages

// routes
app.use('/api/v1/auth', authRouter)                                                                                                                   // redirect all requests from '/api/v1/auth' to authRouter
app.use('/api/v1/jobs', jobsRouter)                                                                                                                   // redirect all requests from '/api/v1/jobs' to jobsRouter

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {

   try {
      app.listen(port, () => {
         console.log(`Server is listening on port ${port}...`)
      })
   } catch (error) {
      console.log(error)
   }
}

start()