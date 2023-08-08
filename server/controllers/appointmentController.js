const { Appointment, User, Doctor } = require('../models/models')
const { Op, Model } = require("sequelize");

class AppointmentController {

    async createAppointment(req, res, next) {
        try {
            const { date, doctor_id, user_id } = req.body
            await Appointment.create({
                date: date,
                doctorId: doctor_id,
                userId: user_id
            })
            return res.send(true)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    async getAppointmentInfo(req, res) {
        const { appt_id } = req.params
        console.log('id: ' + appt_id)
        const AppointmentInfo = await Appointment.findOne({
            where: { id: appt_id },
            attributes: ['id', 'date', 'createdAt', 'status', 'userId', 'doctorId'],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName', 'patronymic']
            },
            {
                model: Doctor,
                attributes: ['speciality'],
                include: {
                    model: User,
                    attributes: ['firstName', 'lastName', 'patronymic']
                }
            }],
        })
        return res.json(AppointmentInfo)
    }

    async getAppointments(req, res) {
        const Appointments = await Appointment.findAll({
            //where: {id: 142},
            attributes: ['id', 'date'],
            order: [
                ['id', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName', 'patronymic', 'id']
            },
            {
                model: Doctor,
                attributes: ['id'],
                include: {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'patronymic']
                }
            }
            ]
        })
        return res.json(Appointments)
    }

    async getDays(req, res) {
        try {
            let today = new Date()
            let daysTotal = 10;
            let daysAvailable = []
            for (let i = 0; i < daysTotal; i++) {
                today.setHours(0, 0, 0, 0)
                today.setDate(today.getDate() + 1)
                if (today.getDay() != 0) {
                    daysAvailable.push({
                        dayCode: today.getTime(),
                        name:
                            today.toLocaleString('Ru', {
                                day: 'numeric',
                                month: 'long',
                                weekday: 'short'
                            }).split(', ')

                    })
                }
            }
            return res.json(daysAvailable)
        } catch (e) {
            console.log(e.message)
        }
    }

    async getByDay(req, res) {
        try {
            const { doctor_id, day } = req.query

            const selectedDay = Number(day)

            const nextDay = new Date(selectedDay)
            nextDay.setDate(nextDay.getDate() + 1)


            const startTime = new Date(new Date(selectedDay).setHours(8, 30))
            const endTime = new Date(new Date(selectedDay).setHours(20))

            const appointments = await Appointment.findAll({
                where: {
                    doctorId: Number(doctor_id),
                    date: {
                        [Op.gt]: selectedDay,
                        [Op.lt]: nextDay
                    }
                },
                attributes: ['date'],
                raw: true
            })

            ///Тест

            startTime.setHours(startTime.getHours(), startTime.getMinutes(), 0, 0)
            endTime.setHours(endTime.getHours(), endTime.getMinutes(), 0, 0)

            const timesNew = []

            while (startTime < endTime) {

                const isBooked = appointments.some(appointment =>
                    appointment.date.getTime() == startTime.getTime()
                )
                const resTime = new Date(startTime)
                //const formattedTime = startTime.getHours() + ':' + startTime.getMinutes()

                if (isBooked) {
                    timesNew.push({
                        time: resTime,
                        isLocked: true
                    })
                } else {
                    timesNew.push({
                        time: resTime,
                        isLocked: false
                    })
                }

                startTime.setMinutes(startTime.getMinutes() + 60)
            }

            return res.json(timesNew)
        } catch (e) {
            console.log(e.message)
        }
    }

    async getDoctors(req, res) {
        try {
            const doctors = await Doctor.findAll({
                include: {
                    model: User,
                    attributes: ['firstName', 'lastName', 'patronymic']
                },
                attributes: ['id', 'speciality']
            })
            return res.json(doctors)
        }
        catch (e) {
            console.log(e.message)
        }
    }

}

module.exports = new AppointmentController()
