import {createAppoinment} from '../../http/appointmentAPI'
import styles from './timePicker.module.css'
import {useContext} from 'react'
import {Context} from '../../index'
import {observer} from "mobx-react-lite";


const TimeItem = ({time}) => {
    const {appointment, component} = useContext(Context)

    const create = async () => {
        let date = new Date(time.time).getTime()
        appointment.setSelectedTime(date)
        component.openModal(new Date(date).toLocaleString())
    }

    let formattedTime = new Date(time.time)
    formattedTime = formattedTime.getHours() + ':' + formattedTime.getMinutes()
    return (
        <button className={styles.item}
                disabled={time.isLocked}
                onClick={create}>
            {formattedTime}
        </button>
    );
}

export default TimeItem;