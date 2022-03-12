const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index')

const login = async (req, res) => {

   const { username, password } = req.body                                          // Input aquisiton
   if (!username || !password) {                                                    // Checks id user left username or bassword empty
      throw new BadRequestError('ERROR: Please provide email and password')               // Throws an error using our custom class CustomAPIError
   }
   const id = new Date().getDate()                                                  // Creates new ID
   const token = jwt.sign(                                                          // Token creation
      { id, username },                                                                   // Payload ( good to keep it small for good user experience)
      process.env.JWT_SECRET,                                                             // Jwt server secret key
      { expiresIn: '5s' }                                                                 // Expire date
   ) 

   res.status(StatusCodes.OK).json({ msg: 'user created', token })                  // Server response with a json containing the token and a feedback message
}

const dashboard = async (req, res) => {

   const luckyNumber = Math.floor(Math.random() * 100)                              // Random lucky number to give a nice feedback in front-end
   res.status(StatusCodes.OK).json({                                                // Server response with a json containing the "secret" data and a feedback message
      msg: `Hello ${req.user.username}`,                                                  // Gets the username from decoded toke to display in the message
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
   })
}

module.exports = {
   login, dashboard
}