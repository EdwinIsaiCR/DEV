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
      res.status(20).send(rows)
    })
    .catch(err => {
      res.status(400).send({ message: 'Error listing home', err })
    })
}

module.exports = {
  createHome,
  findAllHomes
}
