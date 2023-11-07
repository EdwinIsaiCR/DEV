const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  /* res.status(200).send({
    message: 'Home Create'
  }) */
  ModelHomes.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Home Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating home', err })
    })
}

const findAllHomes = (req, res) => {
  ModelHomes.findAll()
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing homes', err })
    })
}

const findOneHome = (req, res) => {
  ModelHomes.findOne(req.params.idHome)
    .then(rows => {
      res.status(200).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing home', err })
    })
}

const updateOneHome = (req, res) => {
  ModelHomes.update(req.params.idHome, req.body)
    .then((row) => {
      res.status(200).send({ message: 'Home Updated', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error updating home', err })
    })
}

const destroyOneHome = (req, res) => {
  ModelHomes.destroy(req.params.idHome)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error destroying home', err })
    })
}

const softDeleteOneHome = (req, res) => {
  ModelHomes.softDelete(req.params.idHome)
    .then(() => {
      res.status(204).send()
    })
    .catch(err => {
      res.status(400).send({ message: 'Error deleting home', err })
    })
}

module.exports = {
  createHome,
  findAllHomes,
  findOneHome,
  updateOneHome,
  destroyOneHome,
  softDeleteOneHome
}
