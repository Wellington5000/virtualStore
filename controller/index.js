const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const home = require('./routes/home')
const path = require('path')
const cors = require('cors')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Usa o handlebars como engine de renderização
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(cors())
app.use(express.static(__dirname + '/client'))

//Carrega os arquivos estáticos
app.use(express.static(path.join(__dirname, '../views/css')))

//Configura os arquivos de rotas
app.use('/api', home)

app.listen(3001)