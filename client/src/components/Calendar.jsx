import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css'
import styles from './Calendar.module.css' 

const Calendar = () => {
    
    const [newDate, setnewDate] = useState(new Date())
    const today = new Date()
    console.log(today.getDate())
    console.log(today.getMonth())
    console.log(today.toLocaleString('default', {month: 'long'}))
    console.log(today.toLocaleString('default'))
    console.log(today.getFullYear())
    return (
        <div>
            <DatePicker 
            selected={newDate} 
            onChange={(newDate) => setnewDate(newDate)} />
        </div>
    );
}

export default Calendar;