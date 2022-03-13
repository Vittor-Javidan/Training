const express = require('express')
const jobsRouter = express.Router()

const { getAllJobs, getJob, createJob, updateJob, deleteJob 
} = require('../controllers/jobs')                                                                                                     // require all function from jobs controller

jobsRouter.route('/')                                                                                                                  // handles post and get requests wich cames from './' route
   .post(createJob)                                                                                                                       // post request wich handles jobs creation
   .get(getAllJobs)                                                                                                                       // get request wich handles jobs data requests

jobsRouter.route('/:id')                                                                                                               // handles get, delete and patch requests wich cames from './:id' route
   .get(getJob)                                                                                                                           // get request wich handles jobs data request from a single id
   .delete(deleteJob)                                                                                                                     // delete request wich handles deletion of a job using an id
   .patch(updateJob)                                                                                                                      // patch request wich handle update of a job using an id

module.exports = jobsRouter