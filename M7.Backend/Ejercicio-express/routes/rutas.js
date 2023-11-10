const express = require('express')
const router = express.Router()
const Controller = require('../api/Ejercicio.js')
router.post('/', Controller.createHome)
router.get('/suma', Controller.findAllHomes)
router.get('/usuario', Controller.findOneHome)
router.patch('/swapi', Controller.updateOneHome)
router.delete('/body', Controller.destroyOneHome)
module.exports = router
