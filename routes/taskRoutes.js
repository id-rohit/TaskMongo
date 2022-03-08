const express = require('express')
const router = express.Router()

const taskControllers = require('../controllers/taskControllers')

router.get('/', taskControllers.index)
router.post('/Read', taskControllers.Read)
router.post('/Create', taskControllers.Create)
router.post('/Update', taskControllers.Update)
router.post('/Delete', taskControllers.Delete)

module.exports = router