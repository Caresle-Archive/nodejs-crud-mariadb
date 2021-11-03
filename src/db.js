const { username, password, database } = require('./helpers/dbCredentials')
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(database, username, password, {
	host: 'localhost',
	dialect: 'mariadb'
})

const User = require('./models/user')

async function connection() {
	try {
		await sequelize.authenticate()
		console.log('connection has been established successfully')
		const newUser = User.build({username: 'user sequelize2', password: '1234'})
		await newUser.save()
		console.log('user saved')
	} catch (error) {
		console.log(error)
	}
}

connection()