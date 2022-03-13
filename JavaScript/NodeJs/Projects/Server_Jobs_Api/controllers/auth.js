const User = require('../models/User')                                                                                                             // Require the User model defined by the user Schema
const { StatusCodes } = require('http-status-codes')                                                                                               // Require StatusCode class from http-status-codes dependencie, to let us define status using words instead of numbers
const { BadRequestError } = require('../errors/index')                                                                                             // Require our custom error BadRequestError from errors folder on index.js file
const jwt = require('jsonwebtoken')

const register = async (req, res) => {                                                                                                             // Handles post request to register users on database

   const { name, email, password } = req.body                                                                                                              // Select specific fields from req.body
   if ( !name || !email || !password ) {                                                                                                                   // Checks if the user left empty the fields "name", "email" or "password"
      throw new BadRequestError('SERVER ERROR: the fields name, email or password cannot be empty')                                                        // Creates a new instance of BadRequestError if the user don't provide any of the required fields
   }

   const user = await User.create({ ...req.body })                                                                                                         // Creates a new user using the fields "name", "email", and "password" inside req.body
   const token = jwt.sign({                                                                                                                                // Creates a token to be send to the user browser
      userId: user._id,
      name: user.name, 
   }, process.env.JWT_SECRET, { expiresIn: '30d' })                                                                                                               // Jwt secret and expiration time for the token
   
   res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })                                                                              // Server response with jwt token. The front-end will be responsable to save the in the user Local Storage
}

const login = async (req, res) => {                                                                                                                // Handles get requests to login by users already register on database
   res.send('login user')
}

module.exports = {                                                                                                                                 // Exports "register" and "login" functions to be used on routes by the authRouter
   register, login
}