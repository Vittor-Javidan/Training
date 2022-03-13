const User = require('../models/User')                                                                                                             // Require the User model defined by the user Schema
const { StatusCodes } = require('http-status-codes')                                                                                               // Require StatusCode class from http-status-codes dependencie, to let us define status using words instead of numbers
const { BadRequestError } = require('../errors/index')                                                                                             // Require our custom error BadRequestError from errors folder on index.js file
const bcrypt = require('bcryptjs')                                                                                                                 // Require bcrypt to encrypt the user password before send to database

const register = async (req, res) => {                                                                                                             // Handles post request to register users on database

   const { name, email, password } = req.body                                                                                                      // Select specific fields from req.body
   if ( !name || !email || !password) {                                                                                                            // Checks if the user left empty the fields "name", "email" or "password"
      throw new BadRequestError('SERVER ERROR: the fields name, email or password cannot be empty')                                                        // Creates a new instance of BadRequestError if the user don't provide any of the required fields
   }

   const salt = await bcrypt.genSalt(10)                                                                                                                   // Generate a salt to be used in the hash process
   const hashedPassword = await bcrypt.hash(password, salt)                                                                                                // Hashs the password using the salt
   const tempUser = {                                                                                                                                      // A new object to replace req.body, but with the password hashed
      name,                                                                                                                                                       // Name that cames from req.body
      email,                                                                                                                                                      // Email that cames from req.body
      password: hashedPassword                                                                                                                                    // Password that cames from req.body after being hashed by bcrypt
   }

   const user = await User.create({ ...tempUser })                                                                                                         // Creates a new user using the fields "name", "email", and "password" inside req.body
   res.status(StatusCodes.CREATED).json({ user })                                                                                                          // Server response to the post request
}

const login = async (req, res) => {                                                                                                                // Handles get requests to login by users already register on database
   res.send('login user')
}

module.exports = {                                                                                                                                 // Exports "register" and "login" functions to be used on routes by the authRouter
   register, login
}