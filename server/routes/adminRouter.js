const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

//router.get('/getusers', userController.getUsers)
router.get('/getusers/', userController.getUsers)
router.get('/getusers/:login', userController.getUsers)
router.get('/getuser/:login', userController.getUserInfo)

module.exports = router