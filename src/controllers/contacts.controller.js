const Contact = require('../models/contact')

const getContacts = (req, res) => {
	if (req.cookies.idUsername === undefined) {
		return res.status(401).redirect('/signin')
	}
	res.render('contacts/')
}

const createContact = async (req, res) => {
	const { contact_name, phone_number } = req.body
	const response = await Contact.create({
		contact_name,
		phone_number
	})

	if (!response) {
		res.status(400).end()
	}
	res.status(201).end()
}

module.exports = {
	getContacts,
	createContact
}