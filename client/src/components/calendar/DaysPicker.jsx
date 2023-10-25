import { observer } from "mobx-react-lite";
import DayItem from "./dayItem";
import styles from './daysPicker.module.css'
import { useContext } from "react";
import { Context } from "../../index";

const DaysPicker = observer(() => {
    const { appointment } = useContext(Context)

    return (
        <div className={styles.list}>
            {appointment.days.map(day =>
                <DayItem key={day.dayCode} day={day} />
            )}
        </div>
    );
})

export default DaysPicker;