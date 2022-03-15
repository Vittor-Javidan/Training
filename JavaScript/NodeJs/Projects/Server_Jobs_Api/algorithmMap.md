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
               - Job.create
            - GET: getAllJobs
               - Job.find
         - route ['/:id']
            - GET: getJob
               - Job.findOne
            - DELETE: deleteJob
            - PATCH: updateJob

   + notFoundMiddleware
   + errorHandlerMiddlewar

   + start
      - connectDB
         - mongoose.connect
      - app.listen
