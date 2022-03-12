const CustomAPIError = require('../custom-error')
const { StatusCodes } = require('http-status-codes')

class BadRequestError extends CustomAPIError {

   constructor(message) {

      super(message)
      this.statusCode = StatusCodes.BAD_REQUEST             // return bad request status code to statusCode
      console.log("==========================================================")
      console.log("Bad Request", message)                   // Prints in the server console the error message
   }
}

module.exports = BadRequestError