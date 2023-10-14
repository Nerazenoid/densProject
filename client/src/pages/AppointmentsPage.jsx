import { useContext, useEffect, useState } from "react"
import { getAppointments, getDoctorAppointments } from "../http/appointmentAPI"
import { Context } from ".."
import AppointmentItem from "../components/appointmentItem"
import { observer } from "mobx-react-lite"
import styles from '../components/appointments.module.css'
import { getUserAppointments } from "../http/userAPI"
import Pagination from "../components/pagination"

const AppointmentsPage = observer(() => {

    const { user, appointment, component } = useContext(Context)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        component.setPage(1)
        component.setLimit(10)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (!loading) {
            if (user.user.role === 'ADMIN') {
                getAppointments(component.page, component.limit)
                    .then(data => {
                        appointment.setAppointments(data.rows)
                        component.setTotalCount(data.count)
                    })
            }
            if (user.user.role === 'DOCTOR') {
                getDoctorAppointments(user.user.id, component.page, component.limit).then(data => {
                    appointment.setAppointments(data.rows)
                    component.setTotalCount(data.count)
                })
            }
            if (user.user.role === 'USER') {
                getUserAppointments(user.user.id).then(data => {
                    appointment.setAppointments(data)
                })
            }
        }
    }, [component.page, loading])

    if (loading) {
        return 'Загрузка...'
    }
    return (
        <div className={styles.page}>
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
            <Pagination />
        </div>
    )
})

export default AppointmentsPage