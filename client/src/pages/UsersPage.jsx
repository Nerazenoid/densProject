import { useContext, useEffect, useState } from "react"
import { getUsers } from "../http/userAPI"
import UserItem from "../components/userItem"
import styles from "../components/userItem.module.css"
import { useNavigate } from "react-router-dom"
import { Context } from ".."
import Pagination from "../components/pagination"
import { observer } from "mobx-react-lite"


const UsersPage = observer(() => {

    const { user, component } = useContext(Context)
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        component.setLimit(12)
        component.setPage(1)
    }, [])

    useEffect(() => {
        SearchUsers()
    }, [component.page])

    const SearchUsers = () => {
        getUsers(search, component.page)
            .then(data => {
                setUsers(data.rows)
                component.setTotalCount(data.count)
            })
            .finally(() =>
                setLoading(false)
            )
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
                {users.map(userInfo =>
                    <UserItem key={userInfo.login} userInfo={userInfo} />
                )}
            </div>
            <Pagination />
        </div>
    )
})

export default UsersPage