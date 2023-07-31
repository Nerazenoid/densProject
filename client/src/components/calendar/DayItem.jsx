import { useContext } from 'react'
import styles from './daysPicker.module.css'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const showModal = () => {
    alert('Нажали')
}

const DayItem = observer(({ day }) => {
    const {appointment} = useContext(Context) 
    return (
        <button
        className= {`${styles.item} ${(day[1] === appointment.selectedDay[1] ? styles.active : '')}`}
        onClick={() => appointment.setSelectedDay(day)}
        >
            <p>{day[0]}</p>
            {day[1]}
        </button>
    );
})

export default DayItem;