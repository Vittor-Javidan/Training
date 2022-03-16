const { BadRequestError, NotFoundError } = require('../../errors/index')
const Job = require('../../models/Job')

const checkJob = async (req, res, next) => {                                                             // Local middleware for jobs route created to reduce the amount of "Model.findOne" request in this file

   const { name, userId } = req.user                                                                        // Allow access for the properties "name" and "userId" inside req.user, wich was send by our authentication middleware
   const { id:jobId } = req.params                                                                          // Allow access for the propertie "id" inside req.params, and set "id" alias to "jobId"

   req.user.job = await Job.findOne({                                                                       // Try to find the user job using both "userId" and "jobId"
      _id: jobId,                                                                                              // Filter the search in database where "_id" === "jobId"
      createdBy: userId                                                                                        // Filter the search in database where "createdby" === "userId"
   })
   if ( !req.user.job ) {                                                                                   // Check if "job" is empty or null
      throw new NotFoundError(`SERVER ERROR: no job found with id ${jobId} for ${name}`)                       // Throw Not Found error in case the job don't exist for the current user 
   }

   next()                                                                                                   // allows the route to continue to the next middlewares/methods
}

const bodyReqCheck = (req, res, next) => {                                                               // Checks if the req.body is empty in any required field

   const { company, position } = req.body                                                                   // Allow access for the properties "company" and "position" inside req.body
   if ( !company || !position ){                                                                            // Checks if "company" and/or "position" is empty
      throw new BadRequestError('SERVER ERROR: the field COMPANY and/or POSITION cannot be empty')             // Throws a Bad Request error in case "company" and/or "position" are empty
   }

   next()
}

module.exports = { checkJob, bodyReqCheck }