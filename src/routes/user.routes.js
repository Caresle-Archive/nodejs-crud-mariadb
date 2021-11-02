const routes = require('express').Router()
const { 
	signupForm,
	signinForm
} = require('../controllers/user.controller')

// Signup routes
routes.get('/signup', signupForm)

// Signin routes
routes.get('/signin', signinForm)

module.exports = routes