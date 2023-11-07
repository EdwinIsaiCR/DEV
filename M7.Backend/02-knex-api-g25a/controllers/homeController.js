const ModelHomes = require('../models/Homes')

const createHome = (req, res) => {
  /* res.status(200).send({
    message: 'Home Create'
  }) */
  ModelHomes.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}
module.exports = {
  createHome
}
