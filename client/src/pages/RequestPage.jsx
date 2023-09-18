import { useEffect, useState } from 'react'
import style from './appointmentInfo.module.css'
import { getRequest } from '../http/requestAPI'
import { useParams } from 'react-router-dom'

const RequestPage = () => {

    const { request_id } = useParams()

    const [record, setRecord] = useState({})

    useEffect(() => {
        getRequest(request_id)
            .then(data =>
                setRecord(data))
    }, [])

    return (
        <div className={style.page}>
            <p className={style.title}>Информация о записи № {record.id}</p>
            <div className={style.body}>
                <div className={style.block}>
                    <p className={style.string}><b>ФИО:</b>{record.fullname}</p>
                    <p className={`${style.string} ${style.phone}`}>{record.phone}</p>
                    <p className={style.string}>{record.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default RequestPage