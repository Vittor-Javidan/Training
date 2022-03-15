const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors/index')
const Job = require('../models/Job')

const getAllJobs = async (req, res) => {
   res.send('get all jobs')
}

const getJob = async (req, res) => {
   res.send('get jobs')
}

const createJob = async (req, res) => {                                                                  // Handle POST methods to create a job

   const { company, position } = req.body                                                                   // Allow access to specific filds from "req.body"
   if ( !company || !position ){                                                                            // Checks if the properties "company" or "position" are empty
      throw new BadRequestError('SERVER ERROR: the field "company" and/or "position" cannot be empty')         // throws a bad request error in case "company" or "position" are empty
   }

   const job = await Job.create({                                                                        // creates a job using our model "Job" 
      ...req.body,                                                                                          // it will spread the properties from req.body
      createdBy: req.user.userId                                                                            // will fill the property "createdBy" with the value of "req.user.userId" from authentication step
   })
   res.status(StatusCodes.CREATED).json({ job })                                                            // Send a feedback json response with the object "job"
}

const updateJob = async (req, res) => {
   res.send('update job')
}

const deleteJob = async (req, res) => {
   res.send('delete job')
}

module.exports = {
   getAllJobs, 
   getJob,
   createJob,
   updateJob,
   deleteJob
}