const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const appointmentRouter = require('./appointmentRouter')

router.use('/auth', authRouter)
router.use('/appointment', appointmentRouter)

module.exports = router