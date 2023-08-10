const Router = require('express')
const router = new Router()
const appointmentController = require('../controllers/appointmentController')

router.get('/getday', appointmentController.getByDay)
router.get('/getdays', appointmentController.getDays)
router.post('/create', appointmentController.createAppointment)
router.get('/getdoctors', appointmentController.getDoctors)
router.get('/getlist', appointmentController.getAppointments)
router.get('/getinfo/:appt_id', appointmentController.getAppointmentInfo)
router.get('/getservices', appointmentController.getServices)

module.exports = router