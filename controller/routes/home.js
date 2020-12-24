const express = require('express')
const router = express.Router()

const Product = require('../../model/product')

//ROTA PARA LISTAR OS PRODUTOS EM DESTAQUE
router.get('/', async (req, res) => {
  var product = await Product.find()
  res.json(product)
})

//LISTA OS PRODUTOS SIMILARES AO ESCOLHIDO DE ACORDO COM A SUA CATEGORIA
router.post('/similar', async (req, res) => {
  var similar = await Product.find({category: req.body.category})
  res.json(similar)
})

//CRIA PRODUTOS
router.post('createProduct', async (req, res) => {
  await Product.create({
    name: 'T-SHIRT MASCUINA',
    value: 90,
    amount: 30,
    description: 'SOU UMA DESCRIÇÃO DO SEU PRODUTO',
    brand: 'COLCCI',
    category: 'CAMISA',
    sizes: ['Pequeno','Médio','Grande', 'Extra Grande'],
    images: ['./client/image']
  })
  res.json({msg: 'success'})
})

module.exports = router