const supertest = require('supertest')
const {app, server} = require('../src/index')
const api = supertest(app)
const { sequelize } = require('../src/db')

describe('GET', () => {	
	test('All Users', async () => {
		const response = await api.get('/users')
		expect(response.status).toBe(200)
	})
})

afterAll(() => {
	server.close()
	sequelize.close()
})