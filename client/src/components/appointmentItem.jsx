import { useNavigate } from 'react-router-dom'
import styles from './appointments.module.css'
import { APPOINTMENTS_LIST_ROUTE } from '../utils/consts'
import { getStatus } from '../utils/status'



const AppointmentItem = ({ info }) => {
    const navigate = useNavigate()

    const colors = {
        inProgress: '#ddad00',
        awaitPayment: '#5bcdc7',
        complete: '#57c314',
        deny: '#740000'
    }

    const { doctor, user } = info
    const date = new Date(info.date)
    return (
        <div className={styles.row}
            style={{ borderColor: colors[info.status] }}
            onClick={() => navigate(APPOINTMENTS_LIST_ROUTE + '/' + info.id)}>
            <div style={{ borderColor: colors[info.status] }}>
                {info.id}
            </div>
            <div style={{ borderColor: colors[info.status] }}>
                {doctor.user.lastName} {doctor.user.firstName} {doctor.user.patronymic}
            </div>
            <div style={{ borderColor: colors[info.status] }}>
                {user.lastName} {user.firstName} {user.patronymic}
            </div>
            <div>
                {date.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}
            </div>
            <div style={{ background: colors[info.status] }}>
                {getStatus(info.status)}
            </div>
        </div>
    );
}

export default AppointmentItem;