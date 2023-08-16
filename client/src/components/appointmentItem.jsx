import { useNavigate } from 'react-router-dom'
import styles from './appointments.module.css'
import { APPOINTMENTS_LIST_ROUTE } from '../utils/consts'
import { getStatus } from '../utils/status'



const AppointmentItem = ({ info }) => {
    const navigate = useNavigate()

    const { doctor, user } = info
    const date = new Date(info.date)
    return (
        <div className={styles.row} onClick={() => navigate(APPOINTMENTS_LIST_ROUTE + '/' + info.id)}>
            <div>
                {info.id}
            </div>
            <div>
                {doctor.user.lastName} {doctor.user.firstName} {doctor.user.patronymic}
            </div>
            <div>
                {user.lastName} {user.firstName} {user.patronymic}
            </div>
            <div>
                {date.toLocaleString('ru')}
            </div>
            <div>
                {getStatus(info.status)}
            </div>
        </div>
    );
}

export default AppointmentItem;