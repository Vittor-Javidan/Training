require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const connectDB = require('./db/connect')

//middlewares require
const notFoundMiddleware = require('./middleware/not_found')
const errorHandlerMiddleware = require('./middleware/error_handler')
app.use(express.json())

//routers
const productsRouter = require('./routes/products')

//routes
app.get('/', (req, res) => {
    res.send(`
        <h1>Store API</h1>
        <a href="/api/v1/products">products</a>
    `)
})

//Products route
app.use('/api/v1/products', productsRouter)




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