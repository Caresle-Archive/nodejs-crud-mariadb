const isAuthenticated = (req, res, next) => {
	if (req.cookies.idUsername) {
		return next()
	}
	res.redirect('/signin')
}

module.exports = isAuthenticated