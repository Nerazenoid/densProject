import { useContext } from "react"
import { Context } from ".."
import { observer } from "mobx-react-lite"
import styles from './pagination.module.css'

const Pagination = observer(() => {
    const { appointment } = useContext(Context)
    const pageCount = Math.ceil(appointment.totalCount / appointment.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className={styles.pagination}>
            {pages.map(page =>
                <div
                    key={page}
                    className={`${styles.item} ${(page === appointment.page ? styles.active : '')}`}
                    onClick={() => appointment.setPage(page)}
                >
                    {page}
                </div>
            )}
        </div>
    )
})

export default Pagination