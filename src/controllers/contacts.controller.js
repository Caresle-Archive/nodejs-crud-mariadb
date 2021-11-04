const getContacts = (req, res) => {
	console.log(req.id)
	res.render('contacts/')
}

module.exports = {
	getContacts
}