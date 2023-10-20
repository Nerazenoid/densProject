import {useContext, useEffect, useState} from "react";
import {
    cancelAppointment,
    createProvidedServices,
    getAppointmentInfo,
    getProvidedServices,
    getServices,
    updatePayment
} from "../http/appointmentAPI";
import {useParams} from "react-router-dom";
import style from './appointmentInfo.module.css'
import {getStatus} from "../utils/status";
import {Context} from "..";
import Dentition from "../components/dentition/Dentition";

const AppointmentInfo = () => {

    const {user, dentition} = useContext(Context)
    const [page, setPage] = useState('USER')
    const [appointment, setAppointment] = useState()
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const [comment, setComment] = useState('')
    const [userServices, setUserServices] = useState([])

    const {appointment_id} = useParams()

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
                    if (data.status === 'awaitPayment' ||
                        data.status === 'complete') {
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

    useEffect(() => {
        CountTotal()
    }, [services])


    const startAppointments = () => {
        setLoading(true)
        getServices()
            .then((data) => {
                /*Полный кошмар. Тут я типа с помощью map обращаюсь
                к каждой полученной категории, после чего возвращаю
                полученный с помощью spread текущий элемент
                и перезаписываю поле services добавляя в список полей
                всех объектов внутри services с помощью spread поля
                isChecked и amount. Надеюсь твой мозг не умрет после этого.
                Прости, я из будущего. Я правда старался...*/


                setServices(data.map(arr => {
                    return {
                        ...arr,
                        services: Object.values(arr.services).map(item =>
                            ({...item, isChecked: false, amount: ''})
                        )
                    }
                }))

            }/*setServices(data.map(obj => ({ ...obj, isChecked: false, amount: '' })))*/)
            .finally(() => {
                setPage('DOCTOR')
                setLoading(false)
            })
    }

    const approvePayment = () => {
        setLoading(true)
        updatePayment(appointment_id, discount)
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

        let providedServices = []
        services.map(arr => {
            arr.services.map(item => {
                if (item.isChecked === true) {
                    providedServices.push({
                        serviceId: item.id,
                        amount: item.amount,
                        appointmentId: appointment_id
                    })
                }
            })
        })

        createProvidedServices(providedServices, appointment_id, JSON.stringify(dentition.list), comment)
            .then(() => {
                setPage('USER')
                setLoading(false)
            })
    }

    const checkBoxHandler = (e, service_id) => {
        if (e.target.checked) {
            setServices(
                services.map(arr => {
                    return {
                        ...arr,
                        services: Object.values(arr.services).map(item =>
                            item.id === service_id ? {...item, isChecked: true, amount: '1'} : item)
                    }
                })

                /*services.map((category) => {
                category.services.map(
                    obj => obj.id === service_id ? { ...obj, isChecked: true, amount: '1' } : obj)
                })*/
            )

        } else {
            setServices(
                services.map(arr => {
                    return {
                        ...arr,
                        services: Object.values(arr.services).map(item =>
                            item.id === service_id ? {...item, isChecked: false, amount: ''} : item)
                    }
                })
            )
        }
    }

    const CountTotal = () => {

        const result =
            services.map(arr => {
                return arr.services.filter(({isChecked}) =>
                    isChecked === true).reduce((sum, service) => sum + service.price * service.amount, 0)
            }).reduce((total, categorySum) => total + categorySum, 0)
        setTotal(result)
    }

    const ChangeValue = (service_id, amount) => {
        setServices(
            services.map(arr => {
                return {
                    ...arr,
                    services: Object.values(arr.services).map(item =>
                        item.id === service_id ? {...item, amount: amount} : item)
                }

            })
        )
        CountTotal()
    }

    const getFullName = (lastName, firstName, patronymic) => {
        return `
                    ${lastName ? lastName[0].toUpperCase() + lastName.substring(1) : ''}
                    ${firstName ? firstName[0].toUpperCase() + firstName.substring(1) : ''}
                    ${patronymic ? patronymic[0].toUpperCase() + patronymic.substring(1) : ''}
                    `
    }

    if (loading) {
        return (<p>Загрузка</p>)
    }

    if (page === 'DENTITION') {
        return (
            <div className={style.page}>
                <p className={style.title}>Зубная формула
                    пациента {getFullName(appointment.user.lastName, appointment.user.firstName, appointment.user.patronymic)}</p>
                <div className={style.fLarge}>
                    <Dentition user_id={appointment.user.id}/>
                </div>
                <button className={style.submit_btn} onClick={startAppointments}>Перейти к оформлению услуг</button>
            </div>
        )
    }


    if (page === 'DOCTOR') {
        return (
            <div className={style.page}>
                <div className={style.service_list}>
                    {services.map((category) =>
                        <div className={style.category_block} key={category.name}>
                            <p className={style.subtitle}>{category.name}</p>
                            <div className={style.service_inputs}>
                                {category.services.map(service =>
                                    <div
                                        className={service.isChecked ? `${style.service_item} ${style.selected}` : `${style.service_item}`}
                                        key={service.id}>
                                        <input
                                            type="checkbox"
                                            className={style.checkbox}
                                            checked={service.isChecked}
                                            onChange={(e) => checkBoxHandler(e, service.id, service.price)}>
                                        </input>
                                        <p className={style.service_name}>{service.name}
                                        </p>

                                        {service.isChecked ? <i> x </i> : null}
                                        <input type="number"
                                               className={style.amount_input}
                                               disabled={!service.isChecked}
                                               placeholder=" "
                                               value={service.amount}
                                               onBlur={(e) => {
                                                   if (!e.target.value || e.target.value < 1) ChangeValue(service.id, '1')
                                               }}
                                               onChange={(e) => ChangeValue(service.id, e.target.value)}>

                                        </input>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <textarea className={style.textarea} placeholder='Комментарий врача (необязательно)' value={comment}
                          onChange={e => setComment(e.target.value)}/>
                <p className={style.total}>Итого: {total}</p>
                <button className={style.submit_btn} onClick={applyProvidedServices}>Сохранить</button>
            </div>
        )
    }

    return (
        <div className={style.page} style={{borderColor: colors[appointment.status]}}>
            <p className={style.title}>Информация о записи №{appointment.id}</p>
            <div className={style.body}>
                <div className={style.main_info}>
                    <div className={style.block}>
                        <p className={style.string_creation}><b>Дата
                            создания:</b> {new Date(appointment.createdAt).toLocaleString('ru', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            second: 'numeric'
                        })} </p>
                        <p className={style.string}><b>Время
                            приема:</b> {new Date(appointment.date).toLocaleString('ru', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric'
                        })} </p>
                        <p className={style.string}><b>Статус приема: <i
                            style={{color: colors[appointment.status]}}>{getStatus(appointment.status)}</i></b></p>
                        <div className={style.comments_block}>
                            <p className={style.comment_title}><b>Комментарий администратора:</b></p>
                            <p className={style.comment}>{appointment.comment}</p>
                        </div>
                        {user.user.role === 'DOCTOR' && (appointment.status === 'complete' || appointment.status === 'awaitPayment') ?
                            <div className={style.comments_block}>
                                <p className={style.comment_title}><b>Комментарий врача:</b></p>
                                <p className={style.comment}>{appointment.appointment_info.comment}</p>
                            </div> :
                            null}
                    </div>
                    <div className={style.flex}>
                        <div className={style.block}>
                            <p className={style.subtitle}>Информация о пациенте</p>
                            <p className={style.string}>
                                <b>ФИО: </b>{getFullName(appointment.user.lastName, appointment.user.firstName, appointment.user.patronymic)}
                            </p>
                            {user.user.role === 'ADMIN' ?
                                <p className={style.string}><b>Телефон: </b>{appointment.user.phone}</p> :
                                null
                            }
                        </div>
                        <div className={style.block}>
                            <p className={style.subtitle}>Информация о враче</p>
                            <p className={style.string}>
                                <b>ФИО: </b>{getFullName(appointment.doctor.user.lastName, appointment.doctor.user.firstName, appointment.doctor.user.patronymic)}
                            </p>
                            <p className={style.string}><b>Специальность: </b>{appointment.doctor.speciality}</p>
                        </div>
                    </div>
                </div>

                {appointment.status === 'complete' || appointment.status === 'awaitPayment' ?
                    <div className={style.US_wrap}>
                        <div className={style.US_block}>
                            <p className={style.subtitle}>Перечень оказанных услуг:</p>
                            {userServices.map(item =>
                                <p key={item.id}
                                   className={style.US_string}>{item.service.name} – {item.service.price} x {item.amount || 1} </p>
                            )}
                            <p className={style.total_price}>Итого:
                                {appointment.appointment_info.discount !== null ?
                                    <span className={style.total_discount_block}>
                                        <s>{appointment.appointment_info.total}₽ -{appointment.appointment_info.discount}%= </s>
                                        {appointment.appointment_info.total - (appointment.appointment_info.total / 100 * appointment.appointment_info.discount)}₽
                                    </span> :
                                    (appointment.appointment_info.total + '₽')
                                }
                            </p>
                        </div>
                    </div> :
                    null}
            </div>
            {user.user.role === 'DOCTOR' && (appointment.status === 'complete' || appointment.status === 'awaitPayment') ?
                <div className={style.fSmall}>
                    <Dentition appointment_id={appointment.id} isClickable={false}/>
                </div> :
                null}

            {appointment.status === 'inProgress' && user.user.role === 'DOCTOR' ?
                <button className={style.submit_btn} onClick={() => setPage('DENTITION')}>Начать прием</button> : null}
            {appointment.status === 'awaitPayment' && user.user.role === 'ADMIN' ?
                <div className={style.submit_block}>
                    <div>
                        <p className={style.discount_title}>Размер скидки:
                            <input
                                className={style.input}
                                value={discount}
                                onChange={e => setDiscount(e.target.value)}
                            >
                            </input>% – c учетом скидки
                            итого: {appointment.appointment_info.total - (appointment.appointment_info.total / 100) * discount}₽
                        </p>
                    </div>
                    <button className={style.submit_btn} onClick={approvePayment}>Оплата подтверждена</button>
                </div> : null}
            {appointment.status === 'inProgress' && user.user.role === 'ADMIN' ?
                <button className={style.deny_btn} onClick={denyAppointment}>Отменить</button> : null}

        </div>
    );
}

export default AppointmentInfo;