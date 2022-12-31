const express = require('express')
const router = express.Router()
const estoque = require('../models/estoque')

router.get("/", (req, res) => {
  tags = req.query.tags;
  if (tags == undefined) {
    data = estoque.allProducts()
    res.render('catalogo', { products : data })
  } else {
    tagsArray = tags.toLowerCase().split(" ");
    data = estoque.filterProducts(tagsArray)
    res.render('catalogo', { products : data })
  }
})

module.exports = router
