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
router.post('/addservices', appointmentController.applyServices)
router.post('/approvepayment', appointmentController.approvePayment)
router.post('/cancelappointment', appointmentController.cancelAppointment)
router.get('/providedservices/:appt_id', appointmentController.getProvidedServices)

router.get('/test', appointmentController.test)

module.exports = router