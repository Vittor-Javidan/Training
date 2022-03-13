const User = require('../models/User')                                                                                                             // Require the User model defined by the user Schema
const { StatusCodes } = require('http-status-codes')                                                                                               // Require StatusCode class from http-status-codes dependencie, to let us define status using words instead of numbers

const register = async (req, res) => {                                                                                                             // Handles post request to register users on database

   const user = await User.create({ ...req.body })                                                                                                         // Creates a new user using the fields "name", "email", and "password" inside req.body
   res.status(StatusCodes.CREATED).json({ user })                                                                                                          // Server response to the post request
}

const login = async (req, res) => {                                                                                                                // Handles get requests to login by users already register on database
   res.send('login user')
}

module.exports = {                                                                                                                                 // Exports "register" and "login" functions to be used on routes by the authRouter
   register, login
}