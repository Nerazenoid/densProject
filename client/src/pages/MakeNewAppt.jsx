import { get, set } from 'mobx';
import TopBar from '../components/header/TopBar.jsx';
import { getByDay, getDays } from "../http/appointmentAPI.js";
import { doLogin } from "../http/userAPI.js";
import { LANDING_ROUTE } from "../utils/consts.js";
import TimePicker from '../components/calendar/timePicker.jsx';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import DaysPicker from "../components/calendar/daysPicker.jsx";
import { Context } from "../index";
import Modal from '../components/modal.jsx';
import { useParams } from 'react-router-dom';


const MakeNewAppt = observer(() => {


    const { appointment,user } = useContext(Context)

    const [loading, setLoading] = useState(true) //Проверка загрузки

    const {doctor_id} = useParams()

    console.log(user.user)
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
        <div>
            <DaysPicker />
            <TimePicker />
            <Modal>awfawfawfwwaf </Modal>
        </div>
    )

}
)
export default MakeNewAppt;