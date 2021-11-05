const routes = require('express').Router()
const isAuthenticated = require('../helpers/auth')
const { 
	getContacts,
	createContact,
	deleteContact
} = require('../controllers/contacts.controller')


routes.get('/contacts', isAuthenticated, getContacts)
routes.post('/contacts', isAuthenticated, createContact)
routes.delete('/contacts/:id', isAuthenticated, deleteContact)

module.exports = routes