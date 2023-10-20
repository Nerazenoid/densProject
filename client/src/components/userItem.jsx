import { useNavigate } from "react-router-dom"
import { USER_ROUTE } from "../utils/consts"
import styles from './userItem.module.css'
import {Context} from "../index";
import {useContext} from "react";

const UserItem = ({ userInfo }) => {

    const navigate = useNavigate()

    const {user} = useContext(Context)

    const regDate = new Date(userInfo.createdAt)

    const birthday = userInfo.birthday !== null ? new Date(userInfo.birthday) : 'Не указан'
    const age = birthday !== 'Не указан'? new Date(new Date() - birthday).getUTCFullYear() - 1970  + ' лет': 'Не указан'

    const fullName =  `
                    ${userInfo.lastName ? userInfo.lastName[0].toUpperCase() + userInfo.lastName.substring(1) : ''}
                    ${userInfo.firstName ? userInfo.firstName[0].toUpperCase() + userInfo.firstName.substring(1) : ''}
                    ${userInfo.patronymic ? userInfo.patronymic[0].toUpperCase() + userInfo.patronymic.substring(1) : ''}
                    `

    return (
        <div className={styles.wrap}>
            <div className={styles.block} onClick={() => navigate(USER_ROUTE + '/' + userInfo.login)}>
                <p className={styles.login}>@{userInfo.login}</p>
                <p className={styles.name}>{fullName}</p>
                <div className={styles.additional_info}>
                    <p className={styles.age}>{age}</p>
                    {user.user.role === 'ADMIN' ? <p className={styles.phone}>{userInfo.phone || 'Не указан'}</p> : null }
                </div>
                <p className={styles.reg_info}>Зарегистрирован с {regDate.toLocaleDateString('ru')}</p>
            </div>
        </div>
    )
}

export default UserItem