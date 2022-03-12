const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('../errors/custom-error')

const errorHandlerMiddleware = (err, req, res, next) => {

   if (err instanceof CustomAPIError) {

      console.log("Instance of CustomAPIError found by errorHandlerMiddleware")     // Sends a confirmation in the server console saying the error is a instance of our class CustomAPIError
      console.log("==========================================================")
      return res.status(err.statusCode).json({ msg: err.message })                  // Sends the status code and a json response (containing the error message) to the browser on front-end

   } else {
      console.log("==========================================================")
      console.log("Unhadle ERROR found by errorHandlerMiddleware:")                 // Sends an alert of arror wich is not being handle by our class CustomAPIError
      console.log(err)                                                              // Prints the unhandle error on server console
      console.log("==========================================================")
   }

   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong try again later')
}

module.exports = errorHandlerMiddleware