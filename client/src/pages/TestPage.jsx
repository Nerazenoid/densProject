import TopBar from '../components/header/TopBar.jsx';
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

    times[testTime.getTime()] = false
    console.log(times)
    return ('Тестовая страница');
}
export default TestPage;