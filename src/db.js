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
		const users = await User.findAll({
			where: {
				username: 'user sequelize2'
			}
		})
		for (const user of users) {
			console.log(user.toJSON())
		}
	} catch (error) {
		console.log(error)
	}
}

connection()

module.exports = { sequelize }