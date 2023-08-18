import { useNavigate } from 'react-router-dom'
import style from './appointmentCard.module.css'
import { APPOINTMENTS_LIST_ROUTE } from '../utils/consts'


const AppointmentCard = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className={style.wrap} onClick={() => navigate(APPOINTMENTS_LIST_ROUTE + '/' + data.id)}>
            <p>Номер приема: {data.id}</p>
            <p>{new Date(data.date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
            <p>Врач: {data.doctor.user.lastName} {data.doctor.user.firstName} {data.doctor.user.patronymic}</p>
        </div>
    )
}

export default AppointmentCard