const fs = require('fs')

module.exports = {

  allProducts: () => {
    let catalogJson = JSON.parse(fs.readFileSync(__dirname + '/../data/estoque.json'))
    return catalogJson
  },

  filterProducts: tagsArray => {
    let catalogJson = JSON.parse(fs.readFileSync(__dirname + '/../data/estoque.json'))
    return catalogJson.filter(p => tagsArray.some(t => p.tags.includes(t)))
  },

  getProduct: id => {
    let catalogJson = JSON.parse(fs.readFileSync(__dirname + '/../data/estoque.json'))
    return catalogJson[id-1]
  },

}

