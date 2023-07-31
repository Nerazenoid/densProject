import styles from './timePicker.module.css'

const showModal = () => {
    alert('Нажали')
}

const TimeItem = ({ appointment }) => {
    return (
        <button className={styles.item}
            disabled={appointment.isLocked}
            onClick={showModal}>
            {appointment.time}
        </button>
    );
}

export default TimeItem;