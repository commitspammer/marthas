const express = require('express')
const router = express.Router()
const estoque = require('../models/estoque')

router.get("/", (req, res) => {
  id = req.query.id
  if (id == undefined) {
    res.redirect('/')
  } else {
    data = estoque.getProduct(id)
    res.render('produto', { product: data })
  }
})

module.exports = router
