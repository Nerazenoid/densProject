import { useContext, useEffect } from "react"
import { getAppointments } from "../http/appointmentAPI"
import { Context } from ".."
import AppointmentItem from "../components/appointmentItem"
import { observer } from "mobx-react-lite"

const AppointmentsPage = observer(() => {

    const { appointment } = useContext(Context)

    useEffect(() => {
        getAppointments().then(data => {
            console.log(data)
            appointment.setAppointments(data)
        })
    }, [])

    setTimeout(() => { console.log(appointment.appointments) }, 2000)

    console.log(appointment.appointments)
    return (
        <div>Записи
            {appointment.appointments.map(record =>
                <AppointmentItem info={record} />
            )}
        </div>
    )
})

export default AppointmentsPage