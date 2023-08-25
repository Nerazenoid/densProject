import { useNavigate } from 'react-router-dom'
import style from './appointmentCard.module.css'
import { APPOINTMENTS_LIST_ROUTE } from '../utils/consts'


const AppointmentCard = ({ data }) => {
    const navigate = useNavigate()

    const colors = {
        inProgress: '#ddad00',
        awaitPayment: '#5bcdc7',
        complete: '#57c314',
        deny: '#740000'
    }

    return (
        <div
        className={style.wrap} 
        style={{borderColor: colors[data.status]}}
        onClick={() => navigate(APPOINTMENTS_LIST_ROUTE + '/' + data.id)}>
            <p className=''>№:{data.id}</p>
            <p>Врач: {data.doctor.user.lastName} {data.doctor.user.firstName} {data.doctor.user.patronymic}</p>
            <p>{new Date(data.date).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>
        </div>
    )
}

export default AppointmentCard