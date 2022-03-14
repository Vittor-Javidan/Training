app.js:

   > app.use ['/api/v1/auth']                            /app.js   
      > authRouter                                       /app.js
         > route ['/register']                              /routes/auth.js
            > POST: register                                /routes/auth.js
               > User.create                                   /constrollers/auth.js
                  > bcrypt.hash                                   /models/User.js
               > user.createJWT                                /constrollers/auth.js
         > route ['/login']                                 /routes/auth.js
            > POST: login                                   /routes/auth.js
               > User.findOne                                  /constrollers/auth.js
               > user.comparePasswords                         /constrollers/auth.js        
               > user.createJWT                                /constrollers/auth.js
   
   > app.use ['/api/v1/jobs']                            /app.js
      > authenticateUser                                 /app.js
         > jwt.verify                                       /middleware/authenticator
      > jobsRouter                                       /app.js
         > route ['/']                                      /routes/jobs.js
            > POST: createJob                               /routes/jobs.js
            > GET: getAllJobs                               /routes/jobs.js
         > route ['/:id']                                   /routes/jobs.js
            > GET: getJob                                   /routes/jobs.js
            > DELETE: deleteJob                             /routes/jobs.js
            > PATCH: updateJob                              /routes/jobs.js

   > notFoundMiddleware                                  /app.js
   > errorHandlerMiddleware                              /app.js

   > start                                               /app.js
      > connectDB                                        /app.js
         > mongoose.connect                                 /db/connect.js
      > app.listen                                       /app.js