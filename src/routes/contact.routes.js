const routes = require('express').Router()
const { getContacts } = require('../controllers/contacts.controller')

routes.get('/contacts', getContacts)

module.exports = routes