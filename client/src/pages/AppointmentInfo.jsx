import { useEffect, useState } from "react";
import { getAppointmentInfo } from "../http/appointmentAPI";
import { useParams } from "react-router-dom";
import style from './appointmentInfo.module.css'

const AppointmentInfo = () => {

    const [appointment, setAppointment] = useState()
    const [loading, setLoading] = useState(true)

    const { appointment_id } = useParams()

    useEffect(() => {
        getAppointmentInfo(appointment_id)
            .then(data =>
                setAppointment(data)
            )
            .finally(
                setLoading(false)
            )
    }, [])

    useEffect(() => {
        console.log(appointment)
    }, [appointment])


    if (loading) {
        return (<p>Загрузка</p>)
    }

    return (
        <div className={style.page}>
            <p className={style.title}>Информация о записи №{appointment.id}</p>
            <div className={style.appointment_info}>
                <p><b>Дата приема:</b> {new Date(appointment.date).toLocaleString('ru')} </p>
                <p><b>Дата записи:</b> {new Date(appointment.createdAt).toLocaleString('ru')} </p>
            </div>
            <div className={style.body}>
                <div className={style.block}>
                    <p className={style.subtitle}>Информация о пациенте</p>
                    <p><b>ФИО:</b>{appointment.user.firstName}</p>
                </div>
                <div className={style.block}>
                    <p className={style.subtitle}>Информация о враче</p>
                    <p><b>ФИО:</b>{appointment.doctor.user.firstName}</p>

                </div>
            </div>
        </div>
    );
}

export default AppointmentInfo;