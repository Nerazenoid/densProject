import { get, set } from 'mobx';
import TopBar from '../components/header/TopBar.jsx';
import { getByDay, getDays } from "../http/appointmentAPI";
import { doLogin } from "../http/userAPI";
import { LANDING_ROUTE } from "../utils/consts";
import TimePicker from '../components/calendar/timePicker.jsx';
import { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import DaysPicker from "../components/calendar/daysPicker.jsx";
import { Context } from "../index";
import Modal from '../components/modal.jsx';


const TestPage = observer(() => {

    const { appointment } = useContext(Context)

    const doctor_id = new URLSearchParams(window.location.search).get('doctor_id')

    useEffect(() => {
        getDays().then(data => {
            appointment.setDays(data);
            appointment.setSelectedDay(appointment.days[0].dayCode)
            getByDay(null, appointment.selectedDay).then(data => appointment.setTimes(data))
        })
        setLoading(false)
    }, [])

    useEffect(() => {
        getByDay(null, appointment.selectedDay).then(data => appointment.setTimes(data))
    }, [appointment.selectedDay, appointment.selectedTime])

    const [loading, setLoading] = useState(true) //Проверка загрузки


    //Не рендерю компонент TimePicker если все еще происходит загрузка
    if (loading)
        return ('Загрузка')
    return (
        <div>
            <DaysPicker />
            <TimePicker />
        </div>
    )

}
)
export default TestPage;