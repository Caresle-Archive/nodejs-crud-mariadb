const {
	username, password, database
} = process.env
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(database, username, password, {
	host: 'localhost',
	dialect: 'mariadb'
})

async function connection() {
	try {
		await sequelize.authenticate()
		console.log('connection has been established successfully')
	} catch (error) {
		console.log(error)
	}
}

connection()