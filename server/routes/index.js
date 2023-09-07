const Router = require('express')
const router = new Router()
const authRouter = require('./authRouter')
const appointmentRouter = require('./appointmentRouter')
const adminRouter = require('./adminRouter')
const requestRouter = require('./requestRouter')

router.use('/auth', authRouter)
router.use('/appointment', appointmentRouter)
router.use('/admin', adminRouter)
router.use('/request', requestRouter)

module.exports = router