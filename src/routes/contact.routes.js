const routes = require('express').Router()
const isAuthenticated = require('../helpers/auth')
const { 
	getContacts,
	createContact
} = require('../controllers/contacts.controller')


routes.get('/contacts', isAuthenticated, getContacts)
routes.post('/contacts', isAuthenticated, createContact)

module.exports = routes