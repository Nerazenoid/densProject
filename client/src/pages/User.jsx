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

    return (
        <div className={styles.page}>
            <p className={styles.title}>Страница пользователя</p>
            <div>
                <p className={styles.subtitle}>ФИО: {`${user.lastName} ${user.firstName} ${user.patronymic}`}</p>
                <p className={styles.subtitle}>Дата рождения: {new Date(user.birthday).toLocaleDateString('ru')}</p>
                <p className={styles.subtitle}>Логин: {user.login}</p>
                <p className={styles.subtitle}>Номер телефона: {user.phone || 'Не указан'}</p>
                <p className={styles.subtitle}>Дата регистрации: {new Date(user.createdAt).toLocaleDateString('ru')}</p>
            </div>
            <div>
                <p className={styles.title}>Информация о приемах</p>
                <div className={styles.appt_list}>
                    {appointments.map(appointment => <AppointmentCard key={appointment.id} data={appointment}/>)}
                </div>
            </div>
        </div>
    )
}

export default UserPage