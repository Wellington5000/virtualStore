const express = require('express')
const router = express.Router()

const Product = require('../../model/product')

router.get('/', async (req, res) => {

  /*await Product.create({
    name: 'T-SHIRT MASCUINA',
    value: 90,
    amount: 30,
    description: 'SOU UMA DESCRIÇÃO DO SEU PRODUTO',
    brand: 'COLCCI',
    category: 'CAMISA',
    sizes: ['Pequeno','Médio','Grande', 'Extra Grande'],
    images: ['./client/image']
  })*/
  
  var product = await Product.find()
  res.json(product)
})


router.post('/similar', async (req, res) => {
  var similar = await Product.find({category: req.body.category})
  console.log(similar);
  res.json(similar)
})

module.exports = router