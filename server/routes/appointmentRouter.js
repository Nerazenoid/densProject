const Router = require('express')
const router = new Router()
const appointmentController = require('../controllers/appointmentController')

router.get('/getday/', appointmentController.getByDay)
router.get('/getday/:day', appointmentController.getTest)
router.get('/getdays/test', appointmentController.getDays)

module.exports = router