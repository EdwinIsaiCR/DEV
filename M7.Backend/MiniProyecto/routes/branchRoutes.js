const express = require('express')
const router = express.Router()
const branchController = require('../controllers/branchController')
router.post('/customers', branchController.createBranch)
router.get('/customers', branchController.findAllBranch)
router.get('/customers/:idBranch', branchController.findOneBranch)
router.patch('/customers/:idBranch', branchController.updateOneBranch)
router.delete('/customers/:idBranch', branchController.destroyOneBranch)
module.exports = router
