const mongoose = require('mongoose')

//Conectar ao banco de dados local
//mongodb://localhost/nome do banco

//Conectar ao banco de dados em nuvem
//mongodb+srv://wellington:22iasmin22@cluster0.qs0my.mongodb.net/Nome do banco?retryWrites=true&w=majority

mongoose.connect('mongodb://localhost/lojaVirtual', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

module.exports = mongoose