const CustomAPIError = require('../custom-error')
const { StatusCodes } = require('http-status-codes')

class UnauthenticadedError extends CustomAPIError {

   constructor(message) {

      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED            // return unuthorized status code to statusCode
      console.log("==========================================================")
      console.log("Unauthenticaded", message)               // Prints in the server console the error message
   }
}

module.exports = UnauthenticadedError