import Calendar from "../components/Calendar"

const NewAppointment = () => {
    return (
        <div>
            'Новая запись'
            <input type="text" placeholder=""></input>
            <Calendar />
        </div>
    )
}

export default NewAppointment