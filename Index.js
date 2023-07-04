const express = require('express')
const app = express()
require('dotenv').config();
const mongoconnect = require('./db')
var bodyParser = require('body-parser')
var cors = require('cors');
mongoconnect();

app.use(express.static('files'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.use('/api', require('./routs/Index'))

app.listen(5000, () => {
  console.log('running 5000')
})