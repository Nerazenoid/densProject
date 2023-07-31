import {get, set} from 'mobx';
import TopBar from '../components/header/TopBar.jsx';
import {getByDay, getDays} from "../http/appointmentAPI";
import {doLogin} from "../http/userAPI";
import {LANDING_ROUTE} from "../utils/consts";
import TimePicker from '../components/calendar/timePicker.jsx';
import {useContext, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import DaysPicker from "../components/calendar/daysPicker.jsx";
import {Context} from "../index";


const TestPage = observer(() => {

        const {appointment} = useContext(Context)

        useEffect(() => {
            getByDay(doctor_id).then(data => appointment.setTimes(data))
            getDays().then(data => appointment.setDays(data))
            setLoading(false)
        })

        const [loading, setLoading] = useState(true) //Проверка загрузки

        //Сначала я беру массив дней из БД
        // и затем после выполнения вызываю обработку
        //для отслеживания выполнения использую переменную loading
        let doctor_id = new URLSearchParams(window.location.search).get('doctor_id')

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