require('dotenv').config()
//async error

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

//middlewares require
const notFoundMiddleware = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error_handler')
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Store API</h1>
        <a href="/api/v1/products">products</a>
    `)
})

//Porducts route




//end middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5000
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        
    }
}

start()