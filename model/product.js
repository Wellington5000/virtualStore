const mongoose = require('./database')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  sizes: [String],
  images: [String]
})

const Product = mongoose.model('products', productSchema)

module.exports = Product