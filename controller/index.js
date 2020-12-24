const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const home = require('./routes/home')
const path = require('path')
const cors = require('cors')
var bodyParser = require('body-parser');

//Configura o body-parser para que seja possível obter dados do front-end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Configura o cors para que aceite solicitações de outras origens 
app.use(cors())

//Define a pasta cliente como a origem dos meus arquivos estáticos
app.use(express.static(__dirname + '/client'))

//Carrega os arquivos estáticos
app.use(express.static(path.join(__dirname, '../views/css')))

//Configura os arquivos de rotas
app.use('/api', home)

app.listen(3001)