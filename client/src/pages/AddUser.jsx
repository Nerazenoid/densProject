import { useState } from 'react'
import style from '../components/addUser.module.css'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../http/userAPI'

const AddUserPage = () => {

    const navigate = useNavigate()

    const [fullname, setFullname] = useState({
        firstName: '',
        lastName: '',
        patronymic: '',
    })
    const [phone, setPhone] = useState('')

    const createUser = async() =>{
        await addUser(fullname, phone)
        navigate('/users')
    }

    return (
        <div className={style.page}>
            <div className={style.block}>
                <p className={style.title}>Добавить пользователя</p>
                <input className={style.input} placeholder='Фамилия' type="text" value={fullname.lastName} onChange={e => setFullname({...fullname, lastName: e.target.value})}></input>
                <input className={style.input} placeholder='Имя' type="text" value={fullname.firstName} onChange={e => setFullname({...fullname, firstName: e.target.value})}></input>
                <input className={style.input} placeholder='Отчество' type="text" value={fullname.patronymic} onChange={e => setFullname({...fullname, patronymic: e.target.value})}></input>
                <input className={style.input} placeholder='Номер телефона' type="tel" value={phone} onChange={e => setPhone(e.target.value)}></input>
                <button className={style.submit_btn} onClick={createUser}>Сохранить</button>
            </div>
        </div>
    )
}

export default AddUserPage