const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/version', db.getVersion, (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})