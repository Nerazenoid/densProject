const { Appointment, User, Doctor, Service, ProvidedService, AppointmentInfo, Category } = require('../models/models')
const { Op, Model, Sequelize } = require("sequelize");

class AppointmentController {

    async createAppointment(req, res) {
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
        const fullAppointmentInfo = await Appointment.findOne({
            where: { id: appt_id },
            attributes: ['id', 'date', 'createdAt', 'status', 'userId', 'doctorId'],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName', 'patronymic', 'phone']
            },
            {
                model: Doctor,
                attributes: ['speciality'],
                include: {
                    model: User,
                    attributes: ['firstName', 'lastName', 'patronymic']
                }
            },
            {
                model: AppointmentInfo,
                attributes: ['total', 'discount']
            }]
        })
        return res.json(fullAppointmentInfo)
    }

    async getServices(req, res) {
        const Services = await Category.findAll({
            attributes: ['name'],
            include: [{
                model: Service,
                attributes: ['id', 'name', 'price']
            }]
        })
        return res.json(Services)
    }

    async getAppointments(req, res) {
        const { page, limit } = req.query
        let offset = page * limit - limit
        const Appointments = await Appointment.findAndCountAll({
            offset,
            limit,
            attributes: ['id', 'date', 'status'],
            order: [
                [Sequelize.literal("status='deny', status='complete', status='inProgress', status='awaitPayment'")],
                [Sequelize.literal("CASE WHEN status = 'inProgress' THEN date END ASC, CASE WHEN 'status' <> 'inProgress' THEN date END DESC")]
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

    async test(req, res) {
        const result = await Category.findAll({
            attributes: ['name'],
            include: [{
                model: Service,
                attributes: ['id', 'name', 'price']
            }]
        })
        return res.json(result)
    }


    async applyServices(req, res) {
        const { services, appt_id } = req.body

        await ProvidedService.bulkCreate(services)

        await Appointment.update({ status: 'awaitPayment' }, {
            where: {
                id: appt_id
            }
        })

        const { price } = await ProvidedService.findOne({
            attributes: [
                [Sequelize.literal('SUM(service.price * provided_service.amount)'), 'price']
            ],
            group: ['provided_service.appointmentId'],
            where: {
                appointmentId: appt_id
            },
            include: [{
                model: Service,
                attributes: []
            }],
            raw: true
        })

        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!' + price)

        await AppointmentInfo.create({
            appointmentId: appt_id,
            total: price
        })

        return res.json(true)
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
                attributes: ['id', 'speciality', 'photo']
            })
            return res.json(doctors)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    async approvePayment(req, res) {
        try {
            const { appt_id, discount } = req.body
            await Appointment.update({ status: 'complete' }, {
                where: {
                    id: appt_id
                }
            })
            if (discount != 0) {
                await AppointmentInfo.update({ discount }, {
                    where: {
                        appointmentId: appt_id
                    }
                })
            }
            res.json(true)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    async cancelAppointment(req, res) {
        try {
            const { appt_id } = req.body
            await Appointment.update({ status: 'deny' }, {
                where: {
                    id: appt_id
                }
            })
            res.json(true)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    async getProvidedServices(req, res) {
        try {
            const { appt_id } = req.params
            const services = await ProvidedService.findAll({
                attributes: ['id', 'amount'],
                where: { appointmentId: appt_id },
                include: {
                    model: Service,
                    attributes: ['name', 'price']
                }
            })
            res.json(services)
        }
        catch (e) {

        }
    }

    async getUserAppointments(req, res) {
        try {
            const { user_id } = req.params
            const appointments = await Appointment.findAll({
                attributes: ['id', 'date', 'status'],
                order: [
                    [Sequelize.literal("status='deny', status='complete', status='inProgress', status='awaitPayment'")],
                    [Sequelize.literal("CASE WHEN status = 'inProgress' THEN date END ASC, CASE WHEN 'status' <> 'inProgress' THEN date END DESC")]
                ],
                where: { userId: user_id },
                include: [
                    {
                        model: User,
                        attributes: ['firstName', 'lastName', 'patronymic', 'id']
                    },
                    {
                        model: Doctor,
                        attributes: ['id'],
                        include: {
                            model: User,
                            attributes: ['firstName', 'lastName', 'patronymic', 'id']
                        }
                    }
                ]
            })
            res.json(appointments)
        }
        catch (e) {
            res.json(e)
        }
    }

    async getAppointmentsToDoctor(req, res) {
        const { user_id } = req.params
        const { page, limit } = req.query
        let offset = page * limit - limit
        const appointments = await Appointment.findAndCountAll({
            limit,
            offset,
            attributes: ['id', 'date', 'status'],
            order: [
                [Sequelize.literal("status='deny', status='complete', status='awaitPayment', status='inProgress'")],
                [Sequelize.literal("CASE WHEN status = 'inProgress' THEN date END ASC, CASE WHEN 'status' <> 'inProgress' THEN date END DESC")]
            ],
            include: [{
                model: User,
                attributes: ['firstName', 'lastName', 'patronymic', 'id']
            },
            {
                model: Doctor,
                attributes: ['id'],
                where: {
                    userId: user_id
                },
                include: {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName', 'patronymic']
                }
            }
            ]
        })
        return res.json(appointments)
    }

}

module.exports = new AppointmentController()
