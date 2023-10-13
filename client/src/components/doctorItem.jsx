import { useNavigate } from 'react-router-dom'
import styles from './doctor.module.css'
import { NEW_APPOINTMENT_ROUTE } from '../utils/consts'

const DoctorItem = ({ doctor }) => {

    const navigate = useNavigate()
    return (
        <div className={styles.block} onClick={() => navigate(NEW_APPOINTMENT_ROUTE + '/' + doctor.id)}>
            <div className={styles.photo}>
                <img src={process.env.REACT_APP_API_URL + doctor.photo}></img>
            </div>
            <div className={styles.main}>
                <p className={styles.name}>
                    {`${doctor.user.lastName} ${doctor.user.firstName} ${doctor.user.patronymic}`}
                </p>
                <p className={styles.speciality}>
                    {doctor.speciality}
                </p>
            </div>
        </div>
    )
}

export default DoctorItem