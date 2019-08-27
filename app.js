// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// 當使用者送出資料時
app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password, options })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})