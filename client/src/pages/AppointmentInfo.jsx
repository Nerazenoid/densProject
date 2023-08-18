import { useEffect, useState } from "react";
import { createProvidedServices, getAppointmentInfo, getProvidedServices, getServices, updatePayment } from "../http/appointmentAPI";
import { useParams } from "react-router-dom";
import style from './appointmentInfo.module.css'
import { observer } from "mobx-react-lite";
import { getStatus } from "../utils/status";

const AppointmentInfo = () => {

    const [page, setPage] = useState('USER')
    const [appointment, setAppointment] = useState()
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    const [total, setTotal] = useState(0)
    const [providedServices, setProvidedServices] = useState([])
    const [userServices, setUserServices] = useState([])

    const { appointment_id } = useParams()

    const loadInfo = (appointment_id) => {
        getAppointmentInfo(appointment_id)
            .then(data => {
                setAppointment(data);
                if (data.status == 'awaitPayment' ||
                    data.status == 'complete') {
                    getProvidedServices(appointment_id).then(
                        data => {
                            setUserServices(data)
                        }
                    )
                }
            }
            )
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        loadInfo(appointment_id)
    }, [page])


    const startAppointments = () => {
        setLoading(true)
        getServices()
            .then(data => setServices(data))
            .finally(() => {
                setPage('DOCTOR')
                setLoading(false)
            })
    }

    const approvePayment = () => {
        setLoading(true)
        updatePayment(appointment_id)
            .then(() => {
                loadInfo(appointment_id)
            })

    }

    const applyProvidedServices = () => {
        setLoading(true)
        createProvidedServices(providedServices, appointment_id)
            .then(() => setProvidedServices([]))
            .finally(() => {
                setPage('USER')
                setLoading(false)
            })
    }

    const CheckBoxHandler = (e, service_id, price) => {
        if (e.target.checked) {
            setTotal(total + price)
            setProvidedServices([...providedServices, { serviceId: service_id, appointmentId: appointment_id }])
        } else {
            setTotal(total - price)
            setProvidedServices(providedServices.filter(item => item.serviceId !== service_id))
        }
        console.log(providedServices)
    }

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
                <button className={style.submit_btn} onClick={applyProvidedServices}>Сохранить</button>
            </div>
        )
    }

    return (
        <div className={style.page}>
            <p className={style.title}>Информация о записи №{appointment.id}</p>
            <div className={style.appointment_info}>
                <p><b>Дата приема:</b> {new Date(appointment.date).toLocaleString('ru')} </p>
                <p><b>Дата записи:</b> {new Date(appointment.createdAt).toLocaleString('ru')} </p>
                <p><b>Статус приема:</b> {getStatus(appointment.status)} </p>
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

                {appointment.status == 'complete' || appointment.status == 'awaitPayment' ?
                    <div className={style.US_wrap}>
                        <div className={style.US_block}>
                            <p className={style.subtitle}>Перечень оказанных услуг:</p>
                            {userServices.map(item =>
                                <p key={item.id}>{item.service.name} – {item.service.price} x {item.amount || 1} </p>
                            )}
                            <p className={style.total_price}>Итого: {appointment.appointment_info.total} </p>
                        </div>
                    </div> :

                    null}
            </div>

            {appointment.status == 'inProgress' ?
                <button className={style.submit_btn} onClick={startAppointments}>Начать прием</button> :
                appointment.status == 'awaitPayment' ?
                    <button className={style.submit_btn} onClick={approvePayment}>Оплата подтверждена</button> : ''}

        </div>
    );
}

export default AppointmentInfo;