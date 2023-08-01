import {useContext} from 'react'
import styles from './daysPicker.module.css'
import {Context} from '../..'
import {observer} from 'mobx-react-lite'


const DayItem = observer( ({day}) => {
    const {appointment} = useContext(Context)
    return (
        <button
            className={`${styles.item} ${(day.dayCode === appointment.selectedDay ? styles.active : '')}`}
            onClick={() =>
                appointment.setSelectedDay(day.dayCode)
            }
        >
            <p>{day.name[0]}</p>
            {day.name[1]}
        </button>
    );
})

export default DayItem;