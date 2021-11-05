const routes = require('express').Router()
const isAuthenticated = require('../helpers/auth')
const { 
	getContacts,
	createContact,
	deleteContact,
	renderEdit,
	updateContact
} = require('../controllers/contacts.controller')


routes.get('/contacts', isAuthenticated, getContacts)
routes.post('/contacts', isAuthenticated, createContact)
routes.delete('/contacts/:id', isAuthenticated, deleteContact)
routes.get('/contacts/:id', isAuthenticated, renderEdit)
routes.put('/contacts/:id', isAuthenticated, updateContact)

module.exports = routes