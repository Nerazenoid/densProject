import { useContext, useEffect } from 'react'
import styles from '../components/phoneRequests.module.css'
import Request from '../components/request'
import { Context } from '..'
import { getRequests } from '../http/requestAPI'
import { observer } from 'mobx-react-lite'
import Pagination from '../components/pagination'

const PhoneRequests = observer(() => {

    const { request, component } = useContext(Context)

    useEffect(() => {
        component.setPage(1)
        component.setLimit(10)
    }, [])

    useEffect(() => {
        getRequests(component.page, component.limit)
            .then(data => {
                request.setRequests(data.rows)
                component.setTotalCount(data.count)
            })
    }, [component.page])

    return (
        <div className={styles.page}>
            <div className={styles.table}>
                <div className={styles.header}>
                    <div>ID</div>
                    <div>Номер телефона</div>
                    <div>ФИО</div>
                    <div>Время создания</div>
                    <div>Статус</div>
                </div>
                {request.requests.map(item =>
                    <Request key={item.id} request={item} />)
                }
            </div>
            <Pagination />
        </div>
    )
})

export default PhoneRequests