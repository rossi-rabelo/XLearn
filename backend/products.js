const express = require('express')
const router = express.Router()

let products = [
  {
    id: "PRODUCTSID1",
    name: "Meias",
    value: 50,
  },
  {
    id: "PRODUCTSID2",
    name: "Calças",
    value: 90,
  },
  {
    id: "PRODUCTSID3",
    name: "Blusas de Frio",
    value: 200,
  },
  {
    id: "PRODUCTSID4",
    name: "Bermudas",
    value: 70,
  }
]

router.get('/products', function (req, res) {
    res.status(201).json(products)
})

router.post('/products', (req, res) => {
    const obj = req.body
    obj.id = `PRODUCTSID${products.length + 1}`
    products.push(obj)
    res.status(201).end()
})

router.delete('/products/:index', (req, res) => {
    const index = req.params.index
    products.splice(index, 1)
    res.status(201).end()
})
module.exports = router
