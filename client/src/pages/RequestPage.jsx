import { useEffect, useState } from 'react'
import style from './appointmentInfo.module.css'
import { getRequest, updateRequest } from '../http/requestAPI'
import { useParams } from 'react-router-dom'
import { getRequestStatus } from '../utils/requestStatus'
import { observer } from 'mobx-react-lite'

const RequestPage = observer(() => {

    const { request_id } = useParams()

    const [record, setRecord] = useState({})

    useEffect(() => {
        getRequest(request_id)
            .then(data =>
                setRecord(data))
    }, [])

    const Update = (status) => {
        updateRequest(request_id, status).then(
        )
    }

    return (
        <div className={style.page}>
            <p className={style.title}>Информация о заявке на звонок № {record.id}</p>
            <div className={style.body}>
                <div className={style.block}>
                    <p className={style.string}><b>ФИО:</b>{record.fullname}</p>
                    <p className={`${style.string} ${style.phone}`}>{record.phone}</p>
                    <p className={style.string}>{record.createdAt}</p>
                    <p className={style.string}>{getRequestStatus(record.status)}</p>
                </div>
            </div>
            {record.status !== 'complete' && record.status !== 'deny' ?
                <div>
                    <button
                        className={style.submit_btn}
                        onClick={() => Update('callback')}>Просили перезвонить
                    </button>
                    <button
                        className={style.submit_btn}
                        onClick={() => Update('complete')}>Записались
                    </button>
                    <button
                        className={style.submit_btn}
                        onClick={() => Update('deny')}>Отказались
                    </button>
                </div>
                : null
            }
        </div>
    )
})

export default RequestPage