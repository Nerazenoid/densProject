import {observer} from 'mobx-react-lite';
import {Context} from '..';
import styles from './modal.module.css';
import {useContext,} from 'react';
import {createAppointment} from "../http/appointmentAPI";
import { useParams } from 'react-router-dom';



const Modal = observer(() => {
    const {doctor_id} = useParams()
    const {appointment, component} = useContext(Context)
    console.log(component.active)

    const create = async () => {
        await createAppointment(doctor_id, appointment.selectedTime)
        appointment.setSelectedTime(null)
        console.log(appointment.selectedTime)
        component.closeModal()
    }

    return (
        <div className={component.active ? `${styles.wrap} ${styles.active}` : styles.wrap}
             onClick={() => component.closeModal()}>
            <div className={styles.block} onClick={(e) => e.stopPropagation()}>
                <p className={styles.message}>Вы действительно хотите записаться на {new Date(appointment.selectedTime).toLocaleString()}?</p>
                <div className={styles.buttons}>
                    <button className={styles.submit} onClick={create}>Да
                    </button>
                    <button className={styles.deny} onClick={() => component.closeModal()}>Отмена</button>
                </div>
            </div>
        </div>
    );
})

export default Modal;