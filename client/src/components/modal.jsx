import { observer } from 'mobx-react-lite';
import { Context } from '..';
import styles from './modal.module.css';
import { useContext, useState, } from 'react';
import { createAppointment } from "../http/appointmentAPI";
import { useParams } from 'react-router-dom';
import DropDown from './dropdown';
import { getUsers } from '../http/userAPI';


const Modal = observer(() => {
    const { doctor_id } = useParams()
    const { appointment, component, user } = useContext(Context)

    const [usersList, setUsersList] = useState([])
    const [search, setSearch] = useState('');
    const [comment, setComment] = useState('');
    const [selectedUser, setSelectedUser] = useState('')

    const create = async () => {
        await createAppointment(appointment.selectedTime, doctor_id, user.user.id, '')
        appointment.setSelectedTime(null)
        component.closeModal()
    }

    const createByAdmin = async () => {
        await createAppointment(appointment.selectedTime, doctor_id, selectedUser, comment)
        appointment.setSelectedTime(null)
        setSearch('')
        setSelectedUser('')
        setComment('')
        component.closeModal()
    }

    const denyButton = () => {
        setSearch('')
        setComment('')
        setSelectedUser('')
        component.closeModal()
    }

    const findUsers = async (query) => {
        component.setDropActive(true)
        setSearch(query)
        const users = await getUsers(query)
        setUsersList(users.rows)
    }


    const message = `Вы действительно хотите записаться на ${new Date(appointment.selectedTime).toLocaleString()}?`

    if (appointment.selectedTime != null) {
        if (user.user.role === 'USER') {
            return (
                <div className={component.active ? `${styles.wrap} ${styles.active}` : styles.wrap}
                    onClick={() => component.closeModal()}>
                    <div className={styles.block} onClick={(e) => e.stopPropagation()}>
                        <p className={styles.message}>{message}</p>
                        <div className={styles.buttons}>
                            <button className={styles.submit} onClick={create}>Да</button>
                            <button className={styles.deny} onClick={() => component.closeModal()}>Отмена</button>
                        </div>
                    </div>
                </div>
            )
        }
        if (user.user.role === 'ADMIN') {
            return (
                <div className={component.active ? `${styles.wrap} ${styles.active}` : styles.wrap}
                    onClick={denyButton}>
                    <div className={styles.block} onClick={(e) => e.stopPropagation()}>
                        <p className={styles.message}>Записать пользователя?</p>
                        <div className={styles.search_block}>
                            <input className={styles.input} type='text' placeholder='Поиск' value={search} onChange={e => findUsers(e.target.value)}></input>
                            <DropDown users={usersList} selectedUserName={(query) => setSearch(query)} selectedUserId={(id) => setSelectedUser(id)}/>
                        </div>
                        <div className={styles.search_block}>
                            <textarea className={styles.textarea} type='text' value={comment} onChange={e=> setComment(e.target.value)} placeholder='Здесь можно описать жалобы или пожелания пациента (необязательно)'></textarea>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.deny} onClick={denyButton}>Отмена</button>
                            {selectedUser ? <button className={styles.submit} onClick={createByAdmin}>Подтвердить</button> : null}
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className={component.active ? `${styles.wrap} ${styles.active}` : styles.wrap}
            onClick={() => {component.closeModal()}}>
            <div className={styles.block} onClick={(e) => e.stopPropagation()}>
            </div>
        </div>
    )
})

export default Modal;