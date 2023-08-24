import { useContext, useEffect, useState } from "react"
import { getUsers } from "../http/userAPI"
import UserItem from "../components/userItem"
import styles from "../components/userItem.module.css"
import { useNavigate } from "react-router-dom"
import { Context } from ".."


const UsersPage = () => {

    const { user } = useContext(Context)
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        SearchUsers()
    }, [])

    const SearchUsers = () => {
        getUsers(search)
            .then(data =>
                setUsers(data))
            .finally(() =>
                setLoading(false))
    }

    if (loading) {
        return 'Загрузка'
    }
    return (
        <div className={styles.page}>
            <p className={styles.title}>Список пользователей</p>
            <div className={styles.search_block}>
                <input type="text" className={styles.search_field} onChange={(e) => setSearch(e.target.value)}></input>
                <button className={styles.search_btn} onClick={() => SearchUsers()}>Поиск</button>
                {user.user.role === 'ADMIN' ?
                    <button className={styles.search_btn} onClick={() => navigate('/adduser')}>
                        Добавить пациента</button> :
                    null
                }
            </div>
            <div className={styles.grid}>
                {users.map(user =>
                    <UserItem key={user.login} user={user} />
                )}
            </div>
        </div>
    )
}

export default UsersPage