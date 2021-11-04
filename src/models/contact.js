const {Sequelize, DataTypes, Model} = require('sequelize')
const { 
	username, database, password 
} = require('../helpers/dbCredentials')

const sequelize = new Sequelize(database, username, password, {
	dialect: 'mariadb'
})

class Contact extends Model {}

Contact.init({
	id: {
		type: DataTypes.STRING,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	contact_name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	phone_number: {
		type: DataTypes.STRING,
		allowNull: false
	}
},
{
	sequelize,
	modelName: 'Contact',
	tableName: 'contacts',
	timestamps: false
})

const startContact = async () => await Contact.sync({alter: true})
startContact()

module.exports = Contact