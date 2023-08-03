const Router = require('express')
const router = new Router()
const appointmentController = require('../controllers/appointmentController')

router.get('/getday', appointmentController.getByDay)
router.get('/getdays', appointmentController.getDays)
router.post('/create', appointmentController.createAppointment)
router.get('/getdoctors', appointmentController.getDoctors)
module.exports = router