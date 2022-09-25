
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', db.getVersion, (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
// app.get('/users', db.getVersion)
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})