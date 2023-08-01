import styles from './timePicker.module.css'

const showModal = () => {
    alert('Нажали')
}

const TimeItem = ({time}) => {
    return (
        <button className={styles.item}
                disabled={time.isLocked}
                onClick={showModal}>
            {time.time}
        </button>
    );
}

export default TimeItem;