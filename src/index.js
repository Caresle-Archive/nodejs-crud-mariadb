const express = require('express')
const cors = require('cors')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')

const PORT = process.env.PORT || 3001

app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials')
}))

app.listen(PORT, () => console.log(`Server on PORT ${PORT}`))
