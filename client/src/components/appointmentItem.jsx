import styles from './appointments.module.css'


const AppointmentItem =  ({info}) => {
    const {doctor, user} = info 
    return (
        <div className={styles.item}>
            <div className={styles.doctor}>
                {doctor.user.firstName} {doctor.user.lastName} {doctor.user.patronymic}
            </div>
            {doctor.id} {doctor.user.firstName}
        </div>
    );
}

export default AppointmentItem;