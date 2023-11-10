const ModelCustomers = require('../models/customers.js')

const createCustomer = (req, res) => {
    ModelCustomers.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Customer Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating Customer', err })
    })
}
const findAllCustomers = (req, res) => {
    ModelCustomers.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing customers', err })
    })
}

const findOneCustomer = (req, res) => {
    ModelCustomers.findOne(req.params.idCustomer)
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing customer', err })
    })
}

const updateOneCustomer = (req, res) => {
    ModelCustomers.update(req.params.idCustomer, req.body)
    .then((row) => {
      res.status(200).send({ message: 'Customer Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating customer', err })
    })
}

const destroyOneCustomer = (req, res) => {
    ModelCustomers.destroy(req.params.idCustomer)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying customer', err })
    })
}


module.exports = {
  createCustomer,
  findAllCustomers,
  findOneCustomer,
  updateOneCustomer,
  destroyOneCustomer
}
