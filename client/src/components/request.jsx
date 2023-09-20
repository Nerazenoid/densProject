import { useNavigate } from 'react-router-dom'
import Requests from '../components/phoneRequests.module.css'
import { getRequestStatus } from '../utils/requestStatus'
import styles from './phoneRequests.module.css'
import { REQUESTS_ROUTE } from '../utils/consts'

const Request = ({ request }) => {

    const navigate = useNavigate()

    const colors = {
        inProgress: '#ddad00',
        callback: '#fb8710',
        complete: '#57c314',
        deny: '#740000'
    }

    let date = new Date(request.createdAt)
    return (
        <div
            className={styles.row}
            style={{ borderColor: colors[request.status] }}
            onClick={() => navigate(REQUESTS_ROUTE + '/' + request.id)}>
            <div style={{ borderColor: colors[request.status] }}>
                {request.id}
            </div>
            <div style={{ borderColor: colors[request.status] }}>
                {request.phone}
            </div>
            <div style={{ borderColor: colors[request.status] }}>
                {request.fullname}
            </div>
            <div style={{ borderColor: colors[request.status] }}>
                {date.toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric' })}
            </div>
            <div style={{ background: colors[request.status] }}>
                {getRequestStatus(request.status)}
            </div>
        </div>
    )
}
export default Request