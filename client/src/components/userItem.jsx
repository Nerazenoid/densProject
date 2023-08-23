import { useNavigate } from "react-router-dom"
import { USER_ROUTE } from "../utils/consts"
import styles from './userItem.module.css'

const UserItem = ({ user }) => {

    const navigate = useNavigate()

    const regDate = new Date(user.createdAt)

    const today = new Date()
    const birthday = new Date(user.birthday)
    const age = new Date(today.getTime() -  - birthday.getTime()).getTime()

    return (
        <div className={styles.wrap}>
            <div className={styles.block} onClick={() => navigate(USER_ROUTE + '/' + user.login)}>
                <p className={styles.login}>@{user.login}</p>
                <p className={styles.name}>
                    {` ${user.lastName} ${user.firstName} ${user.patronymic}`}
                </p>
                <p>{`
                ДР: ${birthday.toLocaleDateString('ru')}
                Сегодня: ${today.toLocaleDateString('ru')}
                Возраст: ${age}`}</p>
                <p>Зарегистрирован с {regDate.toLocaleDateString('ru')}</p>
            </div>
        </div>
    )
}

export default UserItem