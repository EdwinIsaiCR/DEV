const ModelProducts = require('../models/products')

const createProducts = (req, res) => {
  ModelProducts.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Product Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating Product', err })
    })
}
const findAllProducts = (req, res) => {
  ModelProducts.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing products', err })
    })
}

const findOneProduct = (req, res) => {
  ModelProducts.findOne(req.params.idProduct)
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing Product', err })
    })
}

const updateOneProduct = (req, res) => {
  ModelProducts.update(req.params.idProduct, req.body)
    .then((row) => {
      res.status(200).send({ message: 'Product Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating Product', err })
    })
}

const destroyOneProduct = (req, res) => {
  ModelProducts.destroy(req.params.idProduct)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying Product', err })
    })
}


module.exports = {
  createProducts,
  findAllProducts,
  findOneProduct,
  updateOneProduct,
  destroyOneProduct
}
