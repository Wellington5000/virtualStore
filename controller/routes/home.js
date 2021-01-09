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
  var similar = await Product.find({ category: req.body.category })
  res.json(similar)
})

//CRIA PRODUTOS
router.get('/createProduct', async (req, res) => {
  await Product.create({
    name: 'Terno Elegancy',
    value: 450,
    amount: 10,
    description: 'SOU UM TERNO',
    brand: 'JONES',
    category: 'TERNOS',
    sizes: ['Pequeno', 'Médio', 'Grande'],
    images: ['img3.jpg', 'img3.jpg', 'img1.jpg', 'img1.jpg', 'img1.jpg',]
  })
  res.json({ msg: 'success' })
})

router.post('/search', async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { "$regex": req.body.data, "$options": "i" } },
      { brand: { '$regex': req.body.data, '$options': 'i' } },
      { category: { '$regex': req.body.data, '$options': 'i' } }
    ]
  })
  res.json(result)
})

module.exports = router