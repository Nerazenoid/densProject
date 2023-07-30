import styles from './DaysPicker.module.css'

const TimeItem = ({day, onClickHandler}) => {
    return (
        <button className={styles.item}
                onClick={onClickHandler}>
            {day}
        </button>
    );
}

export default TimeItem;