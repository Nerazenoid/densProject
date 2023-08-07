const Router = require('express')
const router = new Router()
const appointmentController = require('../controllers/appointmentController')

router.get('/getday', appointmentController.getByDay)
router.get('/getdays', appointmentController.getDays)
router.post('/create', appointmentController.createAppointment)
router.get('/getdoctors', appointmentController.getDoctors)
router.get('/getlist', appointmentController.getAppointments)
module.exports = router