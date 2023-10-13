import { useContext, useEffect, useState } from "react"
import { Context } from "../index"
import DoctorItem from "../components/doctorItem"
import { getDoctors } from "../http/appointmentAPI"
import { observer } from "mobx-react-lite"
import style from '../components/createAppointment.module.css'


const NewAppointment = observer(() => {

    const { appointment} = useContext(Context)

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getDoctors().then(data => appointment.setDoctors(data))
        setLoading(false)
    }, [])

    if (loading) {
        return 'Загрузка'
    }
    return (
        <div className={style.page}>
            <p className={style.title}>Выберите врача</p>
            <div className={style.doctor_list}>
                {appointment.doctors.map(doctor =>
                    <DoctorItem key={doctor.id} doctor={doctor} />
                )}
            </div>
        </div>
    )
}
)

export default NewAppointment