const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const appointmentRouter = require('./appointmentRouter')
const adminRouter = require('./adminRouter')

router.use('/auth', authRouter)
router.use('/appointment', appointmentRouter)
router.use('/admin', adminRouter)

module.exports = router