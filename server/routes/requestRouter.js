const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')

router.post('/create', requestController.createRequest)
router.get('/getrequests', requestController.getRequests)

module.exports = router