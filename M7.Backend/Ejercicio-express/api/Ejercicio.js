const saludo = (req, res) => {
    res.status(200).send({
      message: 'Hola mundo'
    })
  }
  
  const Suma = (req, res) => {
    const {num1, num2 } = req.query
  
  }
  
  const usuario = (req, res) => {
    const { usuario } = req.params
    res.status(200).send({
        message: 'Hola ', usuario
      })
  }

/* const swapi = (req, res) => {
  
} */

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
