const express = require('express')                             // Require express dependencie
const router = express.Router()                                // Creates a router

const { login, dashboard } = require('../controllers/main')    // Require login and dashboard functions from ../controllers/main

const authMiddleware = require('../middleware/auth')           // Require our auth middleware

router.route('/dashboard').get(                                // Handles get method through the route /api/v1/dashboard
   authMiddleware,                                                   // uses our authMiddlere before reach the function
   dashboard                                                         // it uses the dashboard function
)      
router.route('/login').post(login)                             // Handles post method through the route /api/v1/login using the login function

module.exports = router                                        // Export router