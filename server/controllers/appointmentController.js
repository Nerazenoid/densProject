const {Appointment} = require('../models/models')

const getAppointments = () => {

    const startTime = new Date(2023, 6, 27, 8, 30)
    const endTime = new Date(2023, 6, 27, 20)
    let summaryTime = (
        (endTime.getHours() * 60 + endTime.getMinutes())
        - (startTime.getHours() * 60 + startTime.getMinutes()))

    const receptionTime = 60; //Минуты на прием
    let times = {}
    times[startTime.getTime()] = false
    for (let i = 0; i < (summaryTime / receptionTime) - 1; i++) {
        let keyTime = new Date(startTime.setMinutes(startTime.getMinutes() + receptionTime)).getTime()
        times[keyTime] = false
    }
    return times
}

class AppointmentController {
    async getTest(req, res) {
        const {day} = req.params
        return res.json(getAppointments())
    }

    async getDays(req,res) {
        let today = new Date()
        let daysTotal = 10;
        let daysAvailable = []
        for(let i = 0; i < daysTotal; i++){
            today.setDate(today.getDate() + 1)
            if(today.getDay() != 0){
                daysAvailable.push(today.toLocaleString('Ru', {day:'2-digit', month:'long', weekday:'short'}))
            }
        }
        return res.json(daysAvailable)
    }

    async getByDay(req, res) {
        const {doctor_id} = req.query
        const appointments = await Appointment.findAll({
            /*where: {
                id: Number(doctor_id)
            },*/
            attributes: ['date'],
            raw: true
        })
        const startTime = new Date(2023, 6, 27, 8, 30)
        const endTime = new Date(2023, 6, 27, 20)
        let summaryTime = (
            (endTime.getHours() * 60 + endTime.getMinutes())
            - (startTime.getHours() * 60 + startTime.getMinutes()))

        const receptionTime = 60; //Минуты на прием
        let times = [{date: startTime.getTime(), isLocked : false}]
        for (let i = 0; i < (summaryTime / receptionTime) - 1; i++) {
            let keyTime = new Date(startTime.setMinutes(startTime.getMinutes() + receptionTime)).getTime()
            times.push({date: keyTime, isLocked: false})
        }

        appointments.forEach(function (element) {
            times.push({date: element.date, isLocked: true})
        })

        return res.json(times)
    }

}

module.exports = new AppointmentController()
