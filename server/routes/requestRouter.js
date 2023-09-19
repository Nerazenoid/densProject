const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')

router.post('/create', requestController.createRequest)
router.get('/getrequests', requestController.getRequests)
router.get('/getrequest/:id', requestController.getRequest)
router.post('/update', requestController.updateRequest)

module.exports = router