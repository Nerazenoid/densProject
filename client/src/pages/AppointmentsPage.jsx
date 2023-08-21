import { useContext, useEffect } from "react"
import { getAppointments, getDoctorAppointments } from "../http/appointmentAPI"
import { Context } from ".."
import AppointmentItem from "../components/appointmentItem"
import { observer } from "mobx-react-lite"
import styles from '../components/appointments.module.css'

const AppointmentsPage = observer(() => {

    const { user, appointment } = useContext(Context)

    useEffect(() => {
        if (user.user.role === 'DOCTOR') {
            getDoctorAppointments(user.user.id).then(data => {
                console.log(data)
                appointment.setAppointments(data)
            })
        }
        else {
            getAppointments().then(data => {
                console.log(data)
                appointment.setAppointments(data)
            })
        }
    }, [])


    console.log(appointment.appointments)
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div>Номер записи</div>
                <div>ФИО врача</div>
                <div>ФИО пациента</div>
                <div>Время записи</div>
                <div>Статус</div>
            </div>
            {appointment.appointments.map(record =>
                <AppointmentItem key={record.id} info={record} />
            )}
        </div>
    )
})

export default AppointmentsPage