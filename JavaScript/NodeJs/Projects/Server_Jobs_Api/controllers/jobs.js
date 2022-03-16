const { StatusCodes } = require('http-status-codes')
const { NotFoundError } = require('../errors/index')
const Job = require('../models/Job')

const createJob = async (req, res) => {                                                                  // Handle POST method to create a job

   const job = await Job.create({                                                                           // creates a job using our model "Job" 
      ...req.body,                                                                                             // it will spread the properties from req.body
      createdBy: req.user.userId                                                                               // will fill the property "createdBy" with the value of "req.user.userId" from authentication step
   })
   res.status(StatusCodes.CREATED).json({ jobs: job })                                                      // Send a feedback json response with the object "job"
}

const getAllJobs = async (req, res) => {                                                                 // Handle GET method to get all jobs created by the user
   
   const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt')                            // store in the variable "jobs" an array wich all jobs related to userId inside the user token
   if ( jobs.length == 0 ){                                                                                 // checks if the "jobs" array is empty
      throw new NotFoundError(`You don't have any jobs`)                                                       // throws a Not Found error in case "jobs" has no item inside it
   }

   res.status(StatusCodes.OK).json({ jobs: jobs })                                                          // Send a json feedback response with the array "jobs" inside it
}

const getJob = async (req, res) => {                                                                     // Handle Get method to get a unique job created by the user
   res.status(StatusCodes.OK).json({ jobs: req.user.job })                                                  // Send a json feedback response with the job found in database
}

const updateJob = async (req, res) => {                                                                  // Handle PATCH method to update a job       

   const { id:jobId } = req.params                                                                          // Allow access for the propertie "id" inside req.params, and set "id" alias to jobId
   const job = await Job.findByIdAndUpdate(                                                                 // find the job again using his id, and update using the information of the req.body. I checked if the method alone was enough to garantee if the users cannot modify each others job, but they can, so i just decided to use "findOne" before "findByIdAndUpdate" to throw a NotFound error in case the user tries to modify others job.
      {_id:jobId},                                                                                             // Filter the search where "_id" === "jobId"
      req.body,                                                                                                // Update the job using the properties inside req.body
      { new:true, runValidators:true}                                                                          // options. "new: true" means the variable "job" will store the updated information about the job, instead a copy of the previous state before the update
   )

   res.status(StatusCodes.OK).json({ jobs: job })                                                           // Send a json feedback with the updated job
}

const deleteJob = async (req, res, next) => {                                                            // Handle DELETE method to delete a job

   const { userId } = req.user                                                                              // Allow access for the properties "name" and "userId" inside req.user, wich was send by our authentication middleware
   const { id:jobId } = req.params                                                                          // Allow access for the propertie "id" inside req.params, and set "id" alias to "jobId"

   await Job.findByIdAndRemove({ _id:jobId, createdBy:userId })                                             // Find the job by "jobId" again, and delete after

   next()                                                                                                   // deleteJob is configure as a middleware to getAllJobs, so the front end can recieve a response with all left jobs to the current user
}

module.exports = {
   getAllJobs, 
   getJob,
   createJob,
   updateJob,
   deleteJob
}