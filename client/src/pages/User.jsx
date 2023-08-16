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
                data => setUser(data))
            .finally(
                setLoading(false)
            )
    })

    if(loading){
        return('Загрузка')
    }

    return (
        <div className={styles.page}>
            <p className={styles.title}>Страница пользователя</p>
            <div>
                <p className={styles.subtitle}>Логин: {user.login}</p>
            </div>
        </div>
    )
}

export default UserPage