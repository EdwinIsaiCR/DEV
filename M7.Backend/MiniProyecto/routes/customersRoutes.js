const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customersController')
router.post('/customers', customerController.createCustomer)
router.get('/customers', customerController.findAllCustomers)
router.get('/customers/:idCustomer', customerController.findOneCustomer)
router.patch('/customers/:idCustomer', customerController.updateOneCustomer)
router.delete('/customers/:idCustomer', customerController.destroyOneCustomer)
module.exports = router
