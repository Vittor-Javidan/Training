const mongoose = require('mongoose')

//Schema creation and its atributes: This is what is gonna be saved in DataBase.
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters'],
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

/*
    Document creation: 
        First argument = Document name. 
        Second argument = Schema model used to format and filter the data saved inside the DataBase
*/
module.exports = mongoose.model('Task', taskSchema)

/*
    The database used to store these documents will depends of wich url you are using, 
    defined inside the file ".env"

    these url connections are handle inside the "start()" function, right before the server
    starts to listen crud requests.

    in this project, the code is currently inside the ./controllers/server_listener.js file
*/