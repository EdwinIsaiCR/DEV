const ModelBranchs = require('../models/branch.js')

const createBranch = (req, res) => {
    ModelBranchs.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Branch Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating Branch', err })
    })
}
const findAllBranchs = (req, res) => {
    ModelBranchs.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing Branchs', err })
    })
}

const findOneBranch = (req, res) => {
    ModelBranchs.findOne(req.params.idBranch)
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing Branch', err })
    })
}

const updateOneBranch = (req, res) => {
    ModelBranchs.update(req.params.idBranch, req.body)
    .then((row) => {
      res.status(200).send({ message: 'Branch Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating Branch', err })
    })
}

const destroyOneBranch = (req, res) => {
    ModelBranchs.destroy(req.params.idBranch)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying Branch', err })
    })
}


module.exports = {
    createBranch,
  findAllBranchs,
  findOneBranch,
  updateOneBranch,
  destroyOneBranch
}
