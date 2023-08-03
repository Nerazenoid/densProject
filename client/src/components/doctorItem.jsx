import { useNavigate } from 'react-router-dom'
import styles from './doctor.module.css'
import { NEW_APPOINTMENT_ROUTE } from '../utils/consts'

const DoctorItem = ({ doctor }) => {

    const navigate = useNavigate()
    console.log(doctor)
    return (
        <div className={styles.wrap}>
            <div className={styles.block} onClick={() =>navigate(NEW_APPOINTMENT_ROUTE + '/' + doctor.id)}>
                <div className={styles.photo}></div>
                <div className={styles.main}>
                    <p className={styles.name}>
                        {`${doctor.user.firstName} ${doctor.user.patronymic} ${doctor.user.lastName}`}
                    </p>
                    <p className={styles.speciality}>
                        {doctor.speciality}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DoctorItem