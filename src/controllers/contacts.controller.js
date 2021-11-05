const Contact = require('../models/contact')

const getContacts = async (req, res) => {
	const contacts = await Contact.findAll()
	
	if (!contacts) {
		res.render('contacts/')
	}

	const data = []
	for (const contact of contacts) {
		data.push(contact.toJSON())
	}
	res.render('contacts/', {contacts: data})
}

const createContact = async (req, res) => {
	const { contact_name, phone_number } = req.body
	const response = await Contact.create({
		contact_name,
		phone_number
	})

	if (!response) {
		res.status(400).redirect('/contacts')
	}
	res.status(201).redirect('/contacts')
}

const deleteContact = async (req, res) => {
	const { id } = req.params
	const response = await Contact.destroy({
		where: { id }
	})
	if (!response) {
		res.status(404).redirect('/contacts')
	}
	res.status(200).redirect('/contacts')
}

const renderEdit = async (req, res) => {
	const response = await Contact.findOne({ where: { id: req.params.id }})
	if (!response) {
		return res.redirect('/contacts')
	}

	res.render('contacts/', { edit: response.toJSON() })
}

const updateContact = async (req, res) => {
	const id = req.params.id
	const { contact_name, phone_number } = req.body

	if (contact_name === '' || phone_number === '') {
		res.status(400).redirect('/contacts')
	}
	const response = await Contact.update({
		contact_name,
		phone_number
	}, {
		where: {id}
	})
	if (!response) {
		res.status(404).redirect('/contacts')
	}
	res.status(200).redirect('/contacts')
}

module.exports = {
	getContacts,
	createContact,
	deleteContact,
	renderEdit,
	updateContact
}