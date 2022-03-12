const CustomAPIError = require('./custom-error')

const BadRequestError = require('./custom-Errors/bad-request')
const UnauthenticadedError = require('./custom-Errors/unauthenticated')

module.exports = {                                                         // Exports all Error types from our CustomAPIError its children using the same path
   CustomAPIError,
   BadRequestError,
   UnauthenticadedError
}