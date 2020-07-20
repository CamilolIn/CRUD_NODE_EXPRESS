var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const estudiantes_routes = require('./routes/estudiantes') 

var app = express()

//Middleware JSON
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//CORS
app.use(cors())

//Middleware Rutas
app.use('/', estudiantes_routes)



//Exportar APP
module.exports = app