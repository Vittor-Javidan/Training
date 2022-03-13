const User = require('../models/User')                                                                                                             // Require the User model defined by the user Schema
const { StatusCodes } = require('http-status-codes')                                                                                               // Require StatusCode class from http-status-codes dependencie, to let us define status using words instead of numbers
const { BadRequestError, UnauthenticatedError } = require('../errors/index')                                                                       // Require our custom error BadRequestError from errors folder on index.js file

const register = async (req, res) => {                                                                                                             // Handles post request to register users on database

   const { name, email, password } = req.body                                                                                                              // Select specific fields from req.body
   if ( !name || !email || !password ) {                                                                                                                   // Checks if the user left empty the fields "name", "email" or "password"
      throw new BadRequestError('SERVER ERROR: the fields name, email or password cannot be empty')                                                        // Creates a new instance of BadRequestError if the user don't provide any of the required fields
   }

   const user = await User.create({ ...req.body })                                                                                                         // Creates a new user using the fields "name", "email", and "password" inside req.body
   const token = user.createJWT()  
   res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })                                                                              // Server response with jwt token. The front-end will be responsable to save the in the user Local Storage
}

const login = async (req, res) => {                                                                                                                // Handles get requests to login by users already register on database
   
   const { email, password } = req.body                                                                                                                  // retrieves email and password from req.body
   if ( !email || !password ) {                                                                                                                          // checks if the user leave email and/or password empty
      throw new BadRequestError('SERVER ERROR: please provide email and password')                                                                             // Creates a new instance of BadRequestError if the user don't provide email and/or password
   }

   const user = await User.findOne({ email })                                                                                                            // Try to the user in database
   if (!user) {                                                                                                                                          // Checks if "user" exists after the search
      throw new UnauthenticatedError('SERVER ERROR: invalid credentials')                                                                                      // Creates a new instance of UnauthenticatedError if the user don't exists
   }

   const isPasswordCorrect = await user.comparePasswords(password)                                                                                       // Compares the password from req.body with the one hashed in database for the user found, returning true or false
   if (!isPasswordCorrect) {                                                                                                                             // Checks if "isPasswordCorrect" returned true
      throw new UnauthenticatedError('SERVER ERROR: invalid password')                                                                                         // Creates a new instance of UnauthenticatedError if the password is wrong
   }
   
   const token = user.createJWT()                                                                                                                        // Creates a new token to be send to the user browser on front-end
   res.status(StatusCodes.OK).json({ user: { name: user.name }, token })                                                                                 // Server response  that creates a new json response with the user name and token
}

module.exports = {                                                                                                                                 // Exports "register" and "login" functions to be used on routes by the authRouter
   register, login
}