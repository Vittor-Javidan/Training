const connectDB = require('../db/connect') //connects mongoDB
require('dotenv').config()

const start = async (PORT, app) => {
    try {
        await connectDB(process.env.MONGO_URI) //dataBase conection
        console.log(`dataBase connected`)
        app.listen(PORT, console.log(`Server is listening the port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

module.exports = start