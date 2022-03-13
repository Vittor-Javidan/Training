require('dotenv').config();
require('express-async-errors')
const express = require('express')
const app = express();

// connectDB
const connectDB = require('./db/connect')                                                                                                             // require connectDB function to connect to database

// middleware
const authenticateUser = require('./middleware/authentication')                                                                                       // require the authentication from our middlewares

// routers
const authRouter = require('./routes/auth')                                                                                                           // require auth Router from routes folder
const jobsRouter = require('./routes/jobs')                                                                                                           // require jobs Router from routes folfer

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// routes
app.use('/api/v1/auth', authRouter)                                                                                                                   // redirect all requests from '/api/v1/auth' to authRouter
app.use('/api/v1/jobs', authenticateUser, jobsRouter)                                                                                                 // redirect all requests from '/api/v1/jobs' to jobsRouter using our authenticateUser middleware

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000

const start = async () => {

   try {
      await connectDB(process.env.MONGO_URI)                                                                                                          // connects to database using MONGO_URI, which is inside the file .env
      app.listen(port, () => {
         console.log(`Server is listening on port ${port}...`)
      })
   } catch (error) {
      console.log(error)
   }
}

start()