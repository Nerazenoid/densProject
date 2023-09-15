import Requests from '../components/phoneRequests.module.css'
import { getRequestStatus } from '../utils/requestStatus'
import styles from './phoneRequests.module.css'

const Request = ({ request }) => {

    const colors = {
        inProgress: '#ddad00',
        awaitPayment: '#5bcdc7',
        complete: '#57c314',
        deny: '#740000'
    }

    let date = new Date(request.createdAt)
    return (
        <div className={styles.row} style={{borderColor: colors[request.status]}}>
            <div style={{borderColor: colors[request.status]}}>
                {request.id}
            </div>
            <div style={{borderColor: colors[request.status]}}>
                {request.phone}
            </div>
            <div style={{borderColor: colors[request.status]}}>
                {request.fullname}
            </div>
            <div style={{borderColor: colors[request.status]}}>
                {date.toLocaleString('ru', {day: 'numeric', month:'long', year: 'numeric', hour: 'numeric', minute: 'numeric'})}
            </div>
            <div style={{background: colors[request.status]}}>
                {getRequestStatus(request.status)}
            </div>
        </div>
    )
}
export default Request