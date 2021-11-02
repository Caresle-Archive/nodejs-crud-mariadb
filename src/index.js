const express = require('express')
const cors = require('cors')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// View engine
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
	res.render('index')
})

app.listen(PORT, () => console.log(`Server on PORT ${PORT}`))
