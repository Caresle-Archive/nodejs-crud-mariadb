const User = require('../models/user')

/**
 * Renders the sign up form 
 * @param {*} req 
 * @param {*} res
 */
const signupForm = (req, res) => {
	res.render('users/signup')
}

// signin Controllers

/**
 * Renders the signin form
 * @param {*} req 
 * @param {*} res 
 */
const signinForm = (req, res) => {
	res.render('users/signin')
}

const signinUser = async (req, res) => {
	const { username, password } = req.body
	if (!username || !password) {
		return res.status(400).end()
	}

	const response = await User.findOne({where: {username}})

	if (!response) {
		return res.status(400).redirect('/signin')
	}

	const data = response.toJSON()

	if (data.password !== password) {
		return res.status(400).redirect('/signin')
	}
	res.cookie('idUsername', data.id, {
		secure: true
	})
	res.status(200).redirect('/contacts')
}

// User controllers

/**
 * Get all the users in the table users in the db
 * @param {*} req 
 * @param {*} res
 * @returns {Array} an array of json, with the data of all the users
 */
const getAllUsers = async (req, res) => {
	const users = await User.findAll()
	const data = []
	for (const user of users) {
		data.push(user.toJSON())
	}
	res.status(200).json(data)
}

/**
 * Returns a json with the 
 * @param {*} req 
 * @param {*} res
 * @returns {object} A json with the user data.
 */
const getUserById = async (req, res) => {
	const { id } = req.params
	const response = await User.findOne({where: {id}})
	res.status(200).json(response)
}

/**
 * Create a user, the req param need the next arguments in his body:
 * `username` the name of the user <String>.
 * `password` the password of the user <String>.
 * `password2` same as the password. 
 * If the passwords don't match returns a 400
 * @param {*} req 
 * @param {*} res 
 * @returns {(object | res)} A json with the user data that was create
 * if an invalid request is send, will return a 400 error
 */
const createUser = async (req, res) => {
	const { username, password, password2, email} = req.body
	console.log(req.body, 'empty')
	if (!username || !password || !password2 || !email) {
		return res.status(400).end()
	}
	
	if (password !== password2) {
		return res.status(400).end()
	}
	const response = await User.create({
		username,
		password,
		email
	})

	if (!response) {
		return res.status(400).end()
	}

	return res.status(201).redirect('/signin')
	// res.status(201).json(response)
} 

module.exports = {
	signupForm,
	signinForm,
	signinUser,
	getAllUsers,
	getUserById,
	createUser,
}