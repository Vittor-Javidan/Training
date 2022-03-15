const mongoose = require('mongoose')                                                                     // Require the "mongoose" dependencie

const JobSchema = new mongoose.Schema({                                                                  // Creates a new Schema "JobSchema"

   company: {                                                                                               // Creates a new field "company" inside "JobSchema"
      type: String,                                                                                            // "company" must be a String type
      required: [true, 'Please provide a company name'],                                                       // "company" is required to be a valid data on database
      maxlength: 50,                                                                                           // Max lenght of "company" is 100 characters
   },

   position: {                                                                                              // Creates a new field "position" inside "JobSchema"
      type: String,                                                                                            // "position" must be a String type
      required: [true, 'Please provide a position'],                                                           // "position" is required to be a valid data on database
      maxlength: 100,                                                                                          // Max lenght of "postion" is 100 characters
   },

   status: {                                                                                                // Creates a new field "status" inside "JobSchema"
      type: String,                                                                                            // "status" must be a String type
      enum: ['interview', 'declined', 'pending'],                                                              // "status" is defined only by these enums
      default: 'pending',                                                                                      // if the field "status" is leave empty, the database will register as "pending"
   },

   createdBy: {                                                                                             // Creates a new field "createdBy" inside "JobSchema"
      type: mongoose.Types.ObjectId,                                                                           // "createdBy" will be associate with a objectId
      ref: 'User',                                                                                             // The object associated will be a "User"
      required: [true, 'Please provide a user'],                                                               // "createdBy" is required to be a valid data on database
   },

}, {timestamps: true})                                                                                      // Add timestamps to responses

module.exports = mongoose.model('Job', JobSchema)                                                        // Exports our model "Job" using the Schema "JobSchema"