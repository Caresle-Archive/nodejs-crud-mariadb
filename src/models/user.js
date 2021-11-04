const { Sequelize, DataTypes, Model } = require('sequelize')
const { 
	username, database, password 
} = require('../helpers/dbCredentials')
const sequelize = new Sequelize(database, username, password, {
	dialect: 'mariadb'
})

class User extends Model {}

User.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	sequelize,
	modelName: 'User',
	tableName: 'users',
	timestamps: false
})

const startUser = async () => await User.sync({ alter: true })
startUser()
module.exports = User