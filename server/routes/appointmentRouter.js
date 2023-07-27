const Router = require('express')
const router = new Router()
const appointmentController = require('../controllers/appointmentController')

router.get('/getday/', appointmentController.getByDay)

module.exports = router