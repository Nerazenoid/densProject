const { Appointment } = require('../models/models')

class AppointmentController {
    async getByDay(req, res) {
        const { doctor_id } = req.query
        const Appointments = await Appointment.findAll({
            /*where: {
                id: Number(doctor_id)
            },*/
            attributes: ['date'],
            raw: true
        }).then(results => {
            return results.map(x =>  new Date (x.date).getTime())
        });
        return res.json(Appointments)
    }
}
module.exports = new AppointmentController()
