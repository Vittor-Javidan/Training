const jwt = require('jsonwebtoken')
const { UnauthenticadedError } = require('../errors/index')

const authenticationMiddleware = async (req, res, next) => {

   const authHeader = String( req.headers.authorization )                           // String 'Bearer <token>' from headers.authorization
   if (!authHeader || !authHeader.startsWith('Bearer ')) {                          // !authHeader: checks if authHeader has data.        // !authHeader.startsWith('Bearer '): checks if authHeader has a string starting with 'Bearer ';
      throw new UnauthenticadedError('ERROR: No token provided')                          // throw a UnauthenticadedError
   }

   const token = authHeader.split(' ')[1]                                           // Split authHeader into an array of Strings. In this case, ['Bearer', 'token'], and select the index 1

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)                     // Verify if the token received is the one the server gave through login and returns a object containing the payload, if its not, it cause an error of invalid signature
      const { id, username } = decoded                                              // Retrieves id and username from decoded object
      req.user = { id, username }                                                   // Creates a property called 'user' inside the req object, to pass for the next middlewares and functions inside the route get process

      next();                                                                       // Make the route continues to the next middlewares defined by the route

   } catch (error) {                                                                // Catch the error in case decoded throws an error
      throw new UnauthenticadedError('ERROR: Not authorized to access this route')        // throw a UnauthenticadedError
   }
}

module.exports = authenticationMiddleware