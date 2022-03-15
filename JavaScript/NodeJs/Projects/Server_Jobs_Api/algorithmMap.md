   + app.use ['/api/v1/auth'] 
      - authRouter
         - route ['/register']
            - POST: register
               - User.create
                  - bcrypt.hash
               - user.createJWT
         - route ['/login']
            - POST: login
               - User.findOne
               - user.comparePasswords    
               - user.createJWT

   + app.use ['/api/v1/jobs']
      - authenticateUser
         - jwt.verify
      - jobsRouter
         - route ['/']
            - POST: createJob
               - bodyReqCheck
               - Job.create
            - GET: getAllJobs
               - Job.find
         - route ['/:id']
            - GET: getJob
               - checkJob
                  - Job.findOne
            - DELETE: deleteJob
               - checkJob
                  - Job.findOne
               - Job.findByIdAndRemove
               - getAllJobs
            - PATCH: updateJob
               - checkJob
                  - Job.findOne
               - bodyReqCheck
               - Job.findByIdAndUpdate

   + notFoundMiddleware
   + errorHandlerMiddlewar

   + start
      - connectDB
         - mongoose.connect
      - app.listen
