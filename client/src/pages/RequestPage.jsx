import { useEffect, useState } from 'react'
import style from './appointmentInfo.module.css'
import { getRequest, updateRequest } from '../http/requestAPI'
import { useParams } from 'react-router-dom'
import { getRequestStatus } from '../utils/requestStatus'
import { observer } from 'mobx-react-lite'

const RequestPage = observer(() => {

    const { request_id } = useParams()

    const [record, setRecord] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //Костыль чтоб два раза запрос не отправлялся
        if (loading) {
            getRequest(request_id)
                .then(data =>
                    setRecord(data))
                .finally(() =>
                    setLoading(false))
            console.log(record.status)
        }
    }, [loading])

    const Update = (status) => {
        updateRequest(request_id, status)
        .finally(() => setLoading(true))
    }

    if (loading) {
        return ('Загрузка')
    }

    return (
        <div className={style.page}>
            <p className={style.title}>Информация о заявке на звонок № {record.id}</p>
            <div className={style.body}>
                <div className={style.block}>
                    <p className={style.string}><b>ФИО:</b>{record.fullname}</p>
                    <p className={`${style.string} ${style.phone}`}>{record.phone}</p>
                    <p className={style.string}><b>Время создания: </b>{new Date(record.createdAt).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
                    <p className={style.string}><b>Последнее изменение: </b>{new Date(record.updatedAt).toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</p>
                    <p className={style.string}><b>Статус: </b>{getRequestStatus(record.status)}</p>
                </div>
            </div>
            {record.status !== 'complete' && record.status !== 'deny' ?
                <div>
                    <button
                        className={style.request_btn}
                        onClick={() => Update('callback')}>Не дозвонились
                    </button>
                    <button
                        className={style.request_btn}
                        onClick={() => Update('complete')}>Записались
                    </button>
                    <button
                        className={style.request_btn}
                        onClick={() => Update('deny')}>Отказались
                    </button>
                </div>
                : null
            }
        </div>
    )
})

export default RequestPage