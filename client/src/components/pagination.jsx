import { useContext } from "react"
import { Context } from ".."
import { observer } from "mobx-react-lite"
import styles from './pagination.module.css'

const Pagination = observer(() => {
    const { component } = useContext(Context)
    const pageCount = Math.ceil(component.totalCount / component.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className={styles.pagination}>
            {pages.map(page =>
                <div
                    key={page}
                    className={`${styles.item} ${(page === component.page ? styles.active : '')}`}
                    onClick={() => component.setPage(page)}
                >
                    {page}
                </div>
            )}
        </div>
    )
})

export default Pagination