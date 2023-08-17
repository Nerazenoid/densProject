import { useEffect, useState } from 'react'
import styles from '../components/userItem.module.css'
import { getUserInfo } from '../http/userAPI'
import { useParams } from 'react-router-dom'

const UserPage = () => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const { login } = useParams()



    useEffect(() => {
        getUserInfo(login)
            .then(
                data =>
                    setUser(data))
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

            </div>
        </div>
    )
}

export default UserPage