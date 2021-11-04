const routes = require('express').Router()
const { 
	getContacts,
	createContact
} = require('../controllers/contacts.controller')

routes.get('/contacts', getContacts)
routes.post('/contacts', createContact)

module.exports = routes