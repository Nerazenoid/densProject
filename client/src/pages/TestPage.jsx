import TopBar from '../components/header/TopBar.jsx';
import {getByDay} from "../http/appointmentAPI";
import {doLogin} from "../http/userAPI";
import {LANDING_ROUTE} from "../utils/consts";

const TestPage = () => {
    let testTime = new Date('2023-07-27 16:00:00')

    const startTime = new Date(2023, 6, 27, 8, 30)
    const endTime = new Date(2023, 6, 27, 20)
    let summaryTime = (
        (endTime.getHours() * 60 + endTime.getMinutes())
        - (startTime.getHours() * 60 + startTime.getMinutes()))
    const receptionTime = 30;
    let times = {}
    times[startTime] = true
    for (let i = 0; i < (summaryTime / receptionTime) - 1; i++) {
        let keyTime = new Date(startTime.setMinutes(startTime.getMinutes() + receptionTime))
        times[keyTime] = true
    }

    let doctor_id = new URLSearchParams(window.location.search).get('doctor_id')

    const getAppointment = async () => {
        try {
            let data
            data = await getByDay(doctor_id)
            console.log(data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    getAppointment()

    times[testTime.getTime()] = false
    console.log(times)
    return ('Тестовая страница');
}
export default TestPage;