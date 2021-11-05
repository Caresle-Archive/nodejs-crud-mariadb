require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3001

// db
require('./db')

// Routes imports
const userRoutes = require('./routes/user.routes')
const contactRoutes = require('./routes/contact.routes')

// middlewares
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(methodOverride('_method'))

// View engine
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

// Routes

app.get('/', (req, res) => {
	res.render('index')
})

app.use(userRoutes)
app.use(contactRoutes)

app.use((req, res) => res.render('404'))

const server = app.listen(PORT, () => console.log(`Server on PORT ${PORT}`))

module.exports = { app, server }
