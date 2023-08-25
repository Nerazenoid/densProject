import { useEffect, useState } from 'react'
import styles from '../components/userItem.module.css'
import { getUserAppointments, getUserInfo } from '../http/userAPI'
import { useParams } from 'react-router-dom'
import AppointmentCard from '../components/appointmentCard'

const UserPage = () => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState([])

    const { login } = useParams()



    useEffect(() => {
        getUserInfo(login)
            .then(
                data => {
                    setUser(data);
                    getUserAppointments(data.id)
                        .then(data => setAppointments(data));
                })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    if (loading) {
        return ('Загрузка')
    }

    const birthday = new Date(user.birthday)
    const age = new Date(new Date() - birthday).getUTCFullYear() - 1970

    return (
        <div className={styles.page}>
            <p className={styles.title}>Карточка пациента № {user.id}</p>
            <div className={styles.info_block}>
                <p className={styles.login}><b>@</b> {user.login}</p>
                <p className={styles.subtitle}><b>ФИО:</b> {`${user.lastName} ${user.firstName} ${user.patronymic}`}</p>
                <p className={`${styles.subtitle} ${styles.phone}`}>{user.phone || 'Не указан'}</p>
                <p className={styles.subtitle}><b>Дата рождения:</b> {new Date(user.birthday).toLocaleDateString('ru')} – {age} лет</p>
                <p className={styles.subtitle}><b>Дата регистрации:</b> {new Date(user.createdAt).toLocaleDateString('ru')}</p>
            </div>
            <div>
                <p className={styles.title}>Информация о приемах</p>
                <div className={styles.appt_list}>
                    {appointments.map(appointment => <AppointmentCard key={appointment.id} data={appointment} />)}
                </div>
            </div>
        </div>
    )
}

export default UserPage