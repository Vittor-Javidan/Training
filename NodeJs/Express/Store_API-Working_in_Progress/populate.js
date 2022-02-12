require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./model/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(jsonProducts)
        console.log('Success!!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
    }
}

start()

/*
    The function of populate.js is to make a fresh start to the main database, deleting all data from it.
    After this process, the dataBase will be populated again using products.json
*/