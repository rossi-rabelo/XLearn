// node index.js
// ps -aux | grep index.js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
 
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', req.header('Origin') || req.header('origin'))
  res.set('Access-Control-Allow-Headers', 'content-type, authorization')
  res.set('Access-Control-Allow-Credentials', 'true')
  res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE')
  next()
})

app.use( require('./products') )

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
})
