import DayItem from "./DayItem";
import styles from './DaysPicker.module.css'

const DaysPicker = ({days}) => {

    const showModal = () => {
        alert('Нажали день')
    }



    const List = days.map(day => {
        return (
            <DayItem day={day} onClickHandler={showModal} />
        )
    })
    return (
        <div className={styles.list}>
            список дней
            {List}
        </div>
    );
}

export default DaysPicker;