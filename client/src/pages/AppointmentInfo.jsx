import { useContext, useEffect, useState } from "react";
import { cancelAppointment, createProvidedServices, getAppointmentInfo, getProvidedServices, getServices, updatePayment } from "../http/appointmentAPI";
import { useParams } from "react-router-dom";
import style from './appointmentInfo.module.css'
import { observer } from "mobx-react-lite";
import { getStatus } from "../utils/status";
import { Context } from "..";

const AppointmentInfo = () => {

    const { user } = useContext(Context)
    const [page, setPage] = useState('USER')
    const [appointment, setAppointment] = useState()
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    const [total, setTotal] = useState(0)
    const [providedServices, setProvidedServices] = useState([])
    const [userServices, setUserServices] = useState([])

    const { appointment_id } = useParams()

    const colors = {
        inProgress: '#ddad00',
        awaitPayment: '#5bcdc7',
        complete: '#57c314',
        deny: '#740000'
    }

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
        loadInfo(appointment_id);
        window.scrollTo(0, 0)
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

    const denyAppointment = () => {
        setLoading(true)
        cancelAppointment(appointment_id)
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
        <div className={style.page} style={{ borderColor: colors[appointment.status] }}>
            <p className={style.title}>Информация о записи №{appointment.id}</p>
            <div className={style.body}>
                <div className={style.main_info}>
                    <div className={style.block}>
                        <p className={style.string_creation}><b>Дата создания:</b> {new Date(appointment.createdAt).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })} </p>
                        <p className={style.string}><b>Время приема:</b> {new Date(appointment.date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })} </p>
                        <p className={style.string}><b>Статус приема: <i style={{ color: colors[appointment.status] }}>{getStatus(appointment.status)}</i></b></p>
                    </div>
                    <div className={style.flex}>
                        <div className={style.block}>
                            <p className={style.subtitle}>Информация о пациенте</p>
                            <p className={style.string}><b>ФИО: </b>{appointment.user.lastName} {appointment.user.firstName} {appointment.user.patronymic}</p>
                            <p className={style.string}><b>Телефон: </b>{appointment.user.phone}</p>
                        </div>
                        <div className={style.block}>
                            <p className={style.subtitle}>Информация о враче</p>
                            <p className={style.string}><b>ФИО: </b>{appointment.doctor.user.lastName} {appointment.doctor.user.firstName} {appointment.doctor.user.patronymic}</p>
                            <p className={style.string}><b>Специальность: </b>{appointment.doctor.speciality}</p>
                        </div>
                    </div>
                </div>

                {appointment.status == 'complete' || appointment.status == 'awaitPayment' ?
                    <div className={style.US_wrap}>
                        <div className={style.US_block}>
                            <p className={style.subtitle}>Перечень оказанных услуг:</p>
                            {userServices.map(item =>
                                <p key={item.id} className={style.US_string}>{item.service.name} – {item.service.price} x {item.amount || 1} </p>
                            )}
                            <p className={style.total_price}>Итого: {appointment.appointment_info.total} </p>
                        </div>
                    </div> :
                    null}
            </div>

            {appointment.status == 'inProgress' && user.user.role === 'DOCTOR' ?
                <button className={style.submit_btn} onClick={startAppointments}>Начать прием</button> : null}
            {appointment.status == 'awaitPayment' && user.user.role === 'ADMIN' ?
                <button className={style.submit_btn} onClick={approvePayment}>Оплата подтверждена</button> : null}
            {appointment.status == 'inProgress' && user.user.role === 'ADMIN' ?
                <button className={style.deny_btn} onClick={denyAppointment}>Отменить</button> : null}

        </div>
    );
}

export default AppointmentInfo;