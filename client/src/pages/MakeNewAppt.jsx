import { getByDay, getDays } from "../http/appointmentAPI.js";
import TimePicker from '../components/calendar/timePicker.jsx';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import DaysPicker from '../components/calendar/DaysPicker';
import { Context } from '../index';
import Modal from '../components/modal.jsx';
import { useParams } from 'react-router-dom';
import style from './appointmentInfo.module.css'


const MakeNewAppt = observer(() => {


    const { appointment } = useContext(Context)

    const [loading, setLoading] = useState(true) //Проверка загрузки

    const { doctor_id } = useParams()
    useEffect(() => {
        getDays().then(data => {
            appointment.setDays(data);
            appointment.setSelectedDay(appointment.days[0].dayCode)
            getByDay(doctor_id, appointment.selectedDay).then(data => appointment.setTimes(data))
        })
        setLoading(false)
    }, [])

    useEffect(() => {
        getByDay(doctor_id, appointment.selectedDay).then(data => {
            appointment.setTimes(data);
        })
    }, [appointment.selectedDay, appointment.selectedTime])



    //Не рендерю компонент TimePicker если все еще происходит загрузка
    if (loading)
        return ('Загрузка')
    return (
        <div className={style.page}>
            <p className={style.title}>Новая запись</p>
            <div className={style.appointment_form}>
                <DaysPicker />
                <TimePicker />
            </div>
            <Modal />
        </div>
    )

}
)
export default MakeNewAppt;