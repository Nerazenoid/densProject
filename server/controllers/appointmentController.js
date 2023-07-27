const { Appointment } = require('../models/models')

class AppointmentController {
    async getByDay(req, res) {
        const { doctor_id } = req.query
        const Appoinments = await Appointment.findAll();
        console.log(Appoinments[1].dataValues.date)
        return res.json({ message: doctor_id })
    }
}
module.exports = new AppointmentController()
