const signupForm = (req, res) => {
	res.render('users/signup')
}

const signinForm = (req, res) => {
	res.render('users/signin')
}

module.exports = {
	signupForm,
	signinForm
}