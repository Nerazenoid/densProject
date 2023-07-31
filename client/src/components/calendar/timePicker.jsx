import TimeItem from "./timeItem";
import styles from './timePicker.module.css'
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const TimePicker = observer(() => {
    const { appointment } = useContext(Context)
    
    console.log(appointment.times)

    return (
        <div className={styles.list}>
            {appointment.times.map(appointment =>
                <TimeItem key={appointment.date} appointment={appointment} />
            )}
        </div>
    );
})

export default TimePicker;