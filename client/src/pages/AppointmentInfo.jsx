import { useEffect, useState } from "react";
import { getAppointmentInfo, getServices } from "../http/appointmentAPI";
import { useParams } from "react-router-dom";
import style from './appointmentInfo.module.css'
import { observer } from "mobx-react-lite";

const AppointmentInfo = () => {

    const [page, setPage] = useState('USER')
    const [appointment, setAppointment] = useState()
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    const [total, setTotal] = useState(0)
    const [providedServices, setProvidedServices] = useState([])

    const { appointment_id } = useParams()


    const startAppointments = () => {
        setLoading(true)
        getServices()
            .then(data => setServices(data)
            )
            .finally(() => {
                setPage('DOCTOR')
                setLoading(false)
            })
    }

    const CheckBoxHandler = (e, service_id, price) => {
        if(e.target.checked){
            setTotal(total + price)
            setProvidedServices([...providedServices, service_id])
        }else{
            setTotal(total - price)
            setProvidedServices(providedServices.filter(item => item !== service_id))
        }
        console.log(providedServices)
    }


    useEffect(() => {
        getAppointmentInfo(appointment_id)
            .then(data =>
                setAppointment(data)
            )
            .finally(() => {
                setLoading(false)
            })

    }, [])


    if (loading) {
        return (<p>Загрузка</p>)
    }

    if (page === 'DOCTOR') {
        return (
            <div className={style.page}>
                {services.map(service =>
                    <div className={style.checkbox_item} key={service.id}>
                        <input type="checkbox" className={style.checkbox} onChange={(e) => CheckBoxHandler(e, service.id, service.price,)}></input>
                        {service.name}
                    </div>
                )}
                <p>Итого: {total}</p>
            </div>
        )
    }


    return (
        <div className={style.page}>
            <p className={style.title}>Информация о записи №{appointment.id}</p>
            <div className={style.appointment_info}>
                <p><b>Дата приема:</b> {new Date(appointment.date).toLocaleString('ru')} </p>
                <p><b>Дата записи:</b> {new Date(appointment.createdAt).toLocaleString('ru')} </p>
                <p><b>Статус приема:</b> {appointment.status == 'inProgress' ? 'Запись создана' : 'Отменен'} </p>
            </div>
            <div className={style.body}>
                <div className={style.block}>
                    <p className={style.subtitle}>Информация о пациенте</p>
                    <p><b>ФИО: </b>{appointment.user.lastName} {appointment.user.firstName} {appointment.user.patronymic}</p>
                </div>
                <div className={style.block}>
                    <p className={style.subtitle}>Информация о враче</p>
                    <p><b>ФИО: </b>{appointment.doctor.user.lastName} {appointment.doctor.user.firstName} {appointment.doctor.user.patronymic}</p>
                    <p><b>Специальность: </b>{appointment.doctor.speciality}</p>
                </div>
            </div>
            <button onClick={startAppointments}>Начать прием</button>
        </div>
    );
}

export default AppointmentInfo;