const routes = require('express').Router()
const { 
	signupForm,
	signinForm,
	getAllUsers,
	getUserById,
	createUser
} = require('../controllers/user.controller')

// Signup routes
routes.get('/signup', signupForm)

// Signin routes
routes.get('/signin', signinForm)

// User routes
routes.get('/users', getAllUsers)
routes.get('/users/:id', getUserById)

routes.post('/users', createUser)

module.exports = routes