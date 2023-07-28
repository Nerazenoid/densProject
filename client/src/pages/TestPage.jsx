import { get, set } from 'mobx';
import TopBar from '../components/header/TopBar.jsx';
import { getByDay } from "../http/appointmentAPI";
import { doLogin } from "../http/userAPI";
import { LANDING_ROUTE } from "../utils/consts";
import TimePicker from '../components/calendar/timePicker.jsx';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

const TestPage = observer(() => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAppointments().then(
            console.log(times),
            setLoading(false),
            console.log(times)
        )
    })

    const startTime = new Date(2023, 6, 27, 8, 30)
    const endTime = new Date(2023, 6, 27, 20)
    let summaryTime = (
        (endTime.getHours() * 60 + endTime.getMinutes())
        - (startTime.getHours() * 60 + startTime.getMinutes()))

    const receptionTime = 60; //Минуты на прием
    let times = []
    times[startTime.getTime()] = true
    for (let i = 0; i < (summaryTime / receptionTime) - 1; i++) {
        let keyTime = new Date(startTime.setMinutes(startTime.getMinutes() + receptionTime)).getTime()
        times[keyTime] = true
    }

    let doctor_id = new URLSearchParams(window.location.search).get('doctor_id')

    const getAppointments = async () => {
        try {
            let data = []
            data = await getByDay(doctor_id)

            const res = data.forEach(function (element) {
                times[element] = false
            })
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    getAppointments()

    if (loading) {
        return ('Загрузка')
    }
    return (
        <TimePicker times={times} />
    );
})
export default TestPage;