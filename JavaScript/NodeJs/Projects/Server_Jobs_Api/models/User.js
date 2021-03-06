const moongose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new moongose.Schema({                                                                 // Creates a new Schema to format data before send to database

   name: {                                                                                                  // Creates a field "name" inside the Schema
      type: String,                                                                                            // define "name" as a String type
      required: [true, 'Please provide a name'],                                                               // the field "name" must be present to be a valid data to send to database
      minlength: 3,                                                                                            // defines min length to the field "name"
      maxlenght: 50                                                                                            // defines max length to the field "name"
   },

   email: {                                                                                                 // Creates a field "email" inside the Schema 
      type: String,                                                                                            // define "email" as a String type
      required: [true, 'Please provide a email'],                                                              // the field "email" must be present to be a valid data to send to database
      match: [                                                                                                 // Input user provide as "email" must satisfy the Regex condition to be a valid data   
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         'Please provide a valid email'
      ],
      unique: true,                                                                                            // creates a unique index
   },

   password: {                                                                                              // Creates a field "password" inside the Schema
      type: String,                                                                                            // define "password" as a String type
      require: [true, 'Please provide a password'],                                                            // the field "password" must be present to be a valid data to send to database
      minlength: 6,                                                                                            // defines min lenght to the field "password"
   }
})

UserSchema.pre('save', async function() {                                                                // moongose middleware to custom format properties before save in the database. Is important to use normal function format instead arrow funtion to allow you to use the "this" keyword.

   const salt = await bcrypt.genSalt(10)                                                                    // Generate a salt to be used in the hash process
   this.password = await bcrypt.hash(this.password, salt)                                                   // Hashs the password using the salt
})

UserSchema.methods.createJWT = function () {                                                             // Creates a  JWT sing method for instances of User model use after their creations

   return jwt.sign({                                                                                        // Creates and return a token to be send after to the user browser
      userId: this._id,                                                                                        // gets the "_id" from database
      name: this.name,                                                                                         // gets the "name" from database
   }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME })                                      // Jwt secret with expiration time defined on .env file
}

UserSchema.methods.comparePasswords = async function (password) {                                        // Creates a compare password method for instances of User model after their creations

   return await bcrypt.compare(password, this.password)                                                     // bcrypt will compare the password given with the one hashed in database
}

module.exports = moongose.model('User', UserSchema)                                                      // Exports our model "User"
