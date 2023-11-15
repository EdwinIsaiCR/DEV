const express = require('express')
const router = express.Router()
const branchController = require('../controllers/branchController')
router.post('/branchs', branchController.createBranch)
router.get('/branchs', branchController.findAllBranch)
router.get('/branchs/:idBranch', branchController.findOneBranch)
router.patch('/branchs/:idBranch', branchController.updateOneBranch)
router.delete('/branchs/:idBranch', branchController.destroyOneBranch)
module.exports = router
