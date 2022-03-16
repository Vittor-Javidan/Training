const express = require('express')
const jobsRouter = express.Router()

const { 
   checkJob, 
   bodyReqCheck 

} = require('./middleware/jobs')

const { 
   getAllJobs, 
   getJob, 
   createJob,
   updateJob, 
   deleteJob 

} = require('../controllers/jobs')                                                                       // require all function from jobs controller

jobsRouter.route('/')                                                                                    // handles post and get requests wich cames from './' route
   .post(bodyReqCheck, createJob)                                                                           // post request wich handles jobs creation
   .get(getAllJobs)                                                                                         // get request wich handles jobs data requests

jobsRouter.route('/:id')                                                                                 // handles get, delete and patch requests wich cames from './:id' route
   .get(checkJob, getJob)                                                                                   // get request wich handles jobs data request from a single id
   .delete(checkJob, deleteJob, getAllJobs)                                                                 // delete request wich handles deletion of a job using an id, and getAllJobs after to show a feedback of the current left jobs
   .patch(checkJob, bodyReqCheck, updateJob)                                                                // patch request wich handle update of a job using an id

module.exports = jobsRouter