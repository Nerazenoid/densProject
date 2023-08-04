import { useContext, useEffect, useState } from "react"
import { Context } from "../index"
import DoctorItem from "../components/doctorItem"
import { getDoctors } from "../http/appointmentAPI"
import { observer } from "mobx-react-lite"


const NewAppointment = observer(() => {

    const { appointment, user } = useContext(Context)

    const [loading, setLoading] = useState(true)

    console.log(user)

    useEffect(() => {
        getDoctors().then(data => appointment.setDoctors(data))
        setLoading(false)
    },[])

    if (loading) {
        return 'Загрузка'
    }
    return (
        <div>
            {appointment.doctors.map(doctor =>
                <DoctorItem key={doctor.id} doctor={doctor} />
            )}
        </div>
    )
}
)

export default NewAppointment