const supertest = require('supertest')
const {app, server} = require('../src/index')
const api = supertest(app)

test('test', () => {
	expect(1).toBe(1)
})

afterAll(() => {
	server.close()
})