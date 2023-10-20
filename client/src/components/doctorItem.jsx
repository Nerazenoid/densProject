import { useNavigate } from 'react-router-dom'
import styles from './doctor.module.css'
import { NEW_APPOINTMENT_ROUTE } from '../utils/consts'

const DoctorItem = ({ doctor }) => {

    const fullName =  `
                    ${doctor.user.lastName ? doctor.user.lastName[0].toUpperCase() + doctor.user.lastName.substring(1) : ''}
                    ${doctor.user.firstName ? doctor.user.firstName[0].toUpperCase() + doctor.user.firstName.substring(1) : ''}
                    ${doctor.user.patronymic ? doctor.user.patronymic[0].toUpperCase() + doctor.user.patronymic.substring(1) : ''}
                    `

    const navigate = useNavigate()
    return (
        <div className={styles.block} onClick={() => navigate(NEW_APPOINTMENT_ROUTE + '/' + doctor.id)}>
            <div className={styles.photo}>
                <img src={process.env.REACT_APP_API_URL + doctor.photo} alt=''></img>
            </div>
            <div className={styles.main}>
                <p className={styles.name}>
                    {fullName}
                </p>
                <p className={styles.speciality}>
                    {doctor.speciality}
                </p>
            </div>
        </div>
    )
}

export default DoctorItem