import { useContext, useEffect, useState } from 'react'
import styles from '../components/userItem.module.css'
import { getUserAppointments, getUserInfo } from '../http/userAPI'
import { useParams } from 'react-router-dom'
import AppointmentCard from '../components/appointmentCard'
import Dentition from '../components/dentition/Dentition'
import { Context } from '..'

const UserPage = () => {

    const [selectedUser, setSelectedUser] = useState()
    const [loading, setLoading] = useState(true)
    const [appointments, setAppointments] = useState([])

    const { user } = useContext(Context)
    const { login } = useParams()



    useEffect(() => {
        getUserInfo(login)
            .then(data => {
                setSelectedUser(data);
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

    const birthday = new Date(selectedUser.birthday)
    const age = new Date(new Date() - birthday).getUTCFullYear() - 1970
    const birthdayString = selectedUser.birthday !== null ? new Date(selectedUser.birthday).toLocaleDateString('ru') + ' – ' + age + ' лет' : 'Не указана'

    return (
        <div className={styles.page}>
            <p className={styles.title}>Карточка пациента № {selectedUser.id}</p>
            <div className={styles.top_block}>
                <div className={styles.info_block}>
                    <p className={styles.login}><b>@</b> {selectedUser.login}</p>
                    <p className={styles.subtitle}><b>ФИО:</b> {`${selectedUser.lastName} ${selectedUser.firstName} ${selectedUser.patronymic}`}</p>
                    <p className={`${styles.subtitle} ${styles.phone}`}>{selectedUser.phone || 'Не указан'}</p>
                    <p className={styles.subtitle}><b>Дата рождения:</b> {birthdayString}</p>
                    <p className={styles.subtitle}><b>Дата регистрации:</b> {new Date(selectedUser.createdAt).toLocaleDateString('ru')}</p>
                </div>
                {user.user.role === 'DOCTOR' ?
                    <div className={styles.dentition}>
                        <p className={styles.title}>Зубная формула последнего приема</p>
                        <div className={styles.fSmall}>
                            <Dentition user_id={selectedUser.id} isClickable={false} />
                        </div>
                    </div> :
                    null}
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