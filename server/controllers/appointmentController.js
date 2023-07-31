const { Appointment } = require('../models/models')

class AppointmentController {
    async getTest(req, res) {
        const { day } = req.params
        return res.json(getAppointments())
    }

    async getDays(req, res) {
        let today = new Date()
        let daysTotal = 10;
        let daysAvailable = []
        for (let i = 0; i < daysTotal; i++) {
            today.setDate(today.getDate() + 1)
            if (today.getDay() != 0) {
                daysAvailable.push(today.toLocaleString('Ru', { day: 'numeric', month: 'long', weekday: 'short' }).split(', '))
            }
        }
        return res.json(daysAvailable)
    }

    async getByDay(req, res) {
        const { doctor_id } = req.query
        const today = new Date().setHours(0,0,0,0)

        const appointments = await Appointment.findAll({
            where: {
                //id: Number(doctor_id)
                //date
            },
            attributes: ['date'],
            raw: true
        })

        ///Тест

        const startTime = new Date(2023, 6, 27, 8, 30)
        const endTime = new Date(2023, 6, 27, 20)
        startTime.setHours(startTime.getHours(), startTime.getMinutes(), 0, 0)
        endTime.setHours(endTime.getHours(), endTime.getMinutes(), 0, 0)

        const timesNew = []

        while (startTime < endTime) {

            const isBooked = appointments.some(appointment =>
                appointment.date.getTime() == startTime.getTime()
            )
            const formatedTime = startTime.getHours() + ':' + startTime.getMinutes()

            if (isBooked) {
                timesNew.push({
                    time: formatedTime,
                    isLocked: true
                })
            }
            else {
                timesNew.push({
                    time: formatedTime,
                    isLocked: false
                })
            }

            startTime.setMinutes(startTime.getMinutes() + 60)
        }


        return res.json(dafa)
    }

}

module.exports = new AppointmentController()
