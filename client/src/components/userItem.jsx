import { useNavigate } from "react-router-dom"
import { USER_ROUTE } from "../utils/consts"
import styles from './userItem.module.css'

const UserItem = ({ user }) => {

    const navigate = useNavigate()

    const regDate = new Date(user.createdAt)

    const birthday = user.birthday !== null ? new Date(user.birthday) : 'Не указан'
    const age = birthday !== 'Не указан'? new Date(new Date() - birthday).getUTCFullYear() - 1970  + ' лет': 'Не указан'

    return (
        <div className={styles.wrap}>
            <div className={styles.block} onClick={() => navigate(USER_ROUTE + '/' + user.login)}>
                <p className={styles.login}>@{user.login}</p>
                <p className={styles.name}>
                    {`${user.lastName} ${user.firstName} ${user.patronymic}`}
                </p>
                <div className={styles.additional_info}>
                    <p className={styles.age}>{age}</p>
                    <p className={styles.phone}>{user.phone || 'Не указан'}</p>
                </div>
                <p className={styles.reg_info}>Зарегистрирован с {regDate.toLocaleDateString('ru')}</p>
            </div>
        </div>
    )
}

export default UserItem