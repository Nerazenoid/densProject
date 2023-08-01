import TimeItem from "./timeItem";
import styles from './timePicker.module.css'
import { useContext } from "react";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";

const TimePicker = observer(() => {
    const { appointment } = useContext(Context)

    return (
        <div className={styles.list}>
            {appointment.times.map(time =>
                <TimeItem key={time.date} time={time} />
            )}
        </div>
    );
})

export default TimePicker;