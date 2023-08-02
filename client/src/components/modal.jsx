import {observer} from 'mobx-react-lite';
import {Context} from '..';
import styles from './modal.module.css';
import {useContext,} from 'react';
import {createAppointment} from "../http/appointmentAPI";



const Modal = observer(() => {
    const {appointment, component} = useContext(Context)
    console.log(component.active)

    const create = async () => {
        await createAppointment(appointment.selectedTime)
        appointment.setSelectedTime(null)
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