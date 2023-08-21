const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')
const appointmentController = require('../controllers/appointmentController')

//router.get('/getusers', userController.getUsers)
router.get('/getusers/', userController.getUsers)
router.get('/getusers/:login', userController.getUsers)
router.get('/getuser/:login', userController.getUserInfo)
router.get('/userappointments/:user_id', appointmentController.getUserAppointments)
router.get('/doctorappointments/:user_id', appointmentController.getAppointmentsToDoctor)
router.post('/adduser', userController.addUser)

module.exports = router