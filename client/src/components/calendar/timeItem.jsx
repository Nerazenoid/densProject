import styles from './TimePicker.module.css'

const showModal = () => {
    alert('Нажали')
}

const TimeItem = ({appointment}) => {
    console.log(appointment)
    let convertTime = new Date(appointment.date).toLocaleTimeString([],{hour: "2-digit", minute: "2-digit"})
    return (
        <button className={styles.item}
                onClick={showModal}>
            {convertTime}
        </button>
    );
}

export default TimeItem;