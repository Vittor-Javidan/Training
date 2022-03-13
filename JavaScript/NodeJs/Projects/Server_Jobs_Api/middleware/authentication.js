const User = require('../models/User')                                                                                                    // Required User from our models
const jwt = require('jsonwebtoken')                                                                                                       // Required jwt for token verify
const { UnauthenticatedError } = require('../errors/index')                                                                               // Required UnauthenticatedError from index inside errors folders

const auth = (req, res, next) => {                                                                                                        // Auth middleware, responsible to recieve the token from the user Local Storage in the front-end

   const token = req.headers.authorization                                                                                                // Require the token from req.headers
   if(!token) {                                                                                                                           // checks if the token exists
      throw new UnauthenticatedError('SERVER ERROR: not provided or invalid token')                                                          // Creates a new instance of UnauthenticateError in case the token don't exists
   }

   try {                                                                                                                                  // try to verify the token and retrieve the payload inside
      const payload = jwt.verify(token, process.env.JWT_SECRET)                                                                              // stores the payload retrived from the token
      req.user = { userId: payload.userId, name: payload.name}                                                                               // creates a new field inside the req containing the decoded userId and name to pass forward to the next middleware or functions
   } catch (error) {                                                                                                                      // Catchs the error in case the verify fails
      throw new UnauthenticatedError('SERVER ERROR: invalid token')                                                                          // Throws an UnauthenticateError case the token is invalid
   }

   next()
}

module.exports = auth