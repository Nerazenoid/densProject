import {get, set} from 'mobx';
import TopBar from '../components/header/TopBar.jsx';
import {getByDay} from "../http/appointmentAPI";
import {doLogin} from "../http/userAPI";
import {LANDING_ROUTE} from "../utils/consts";
import TimePicker from '../components/calendar/timePicker.jsx';
import {useContext, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import DaysPicker from "../components/calendar/DaysPicker";
import {Context} from "../index";


const TestPage = observer(() => {

        const {appointment} = useContext(Context)

        useEffect(() => {
            getByDay(doctor_id).then(data => appointment.setTimes(data))
            setLoading(false)
        })

        const [loading, setLoading] = useState(true) //Проверка загрузки

        //Сначала я беру массив дней из БД
        // и затем после выполнения вызываю обработку
        //для отслеживания выполнения использую переменную loading
        let doctor_id = new URLSearchParams(window.location.search).get('doctor_id')


        /*useEffect(() => {
            getByDay(doctor_id).then(data => getAppointments(data))
            setLoading(false)
        }, [])*/

        /*const getAppointments = async (data) => {

            //Сначала создаю шаблонный массив на день

            const startTime = new Date(2023, 6, 27, 8, 30)
            const endTime = new Date(2023, 6, 27, 20)
            let summaryTime = (
                (endTime.getHours() * 60 + endTime.getMinutes())
                - (startTime.getHours() * 60 + startTime.getMinutes()))

            const receptionTime = 60; //Минуты на прием
            let times = {}
            times[startTime.getTime()] = false
            for (let i = 0; i < (summaryTime / receptionTime) - 1; i++) {
                let keyTime = new Date(startTime.setMinutes(startTime.getMinutes() + receptionTime)).getTime()
                times[keyTime] = false
            }

            //Затем от каждого элемента массива полученного из БД беру его самого и использую
            // как ключ в массиве time потому что в формате из БД я получаю time()
            // и по этому ключу обращаюсь к массиву time и заменяю значение ключа на false
            try {
                data.forEach(function (element) {
                    times[element] = true
                })
                setTimesRes(times)
            } catch (e) {
                alert(e.response.data.message)
            }
            //PS Я хз нужен ли мне try catch тут
        }*/

        //Не рендерю компонент TimePicker если все еще происходит загрузка
        if (loading)
            return ('Загрузка')
        return (
            <div>
                <TimePicker />
            </div>
        )

    }
)
export default TestPage;