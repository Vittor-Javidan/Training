const express = require('express')
const authRouter = express.Router()

const { login, register } = require('../controllers/auth')           // Imports login and register function from controlers

authRouter.post('/register', register)                               // handles post requests from "/register" route
authRouter.post('/login', login)                                     // handles post requests from "/login" route

module.exports = authRouter