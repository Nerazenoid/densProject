import {useContext} from 'react'
import style from '../components/dropdown.module.css'
import {Context} from '..'

const DropDown = ({users, selectedUserName, selectedUserId}) => {

    const {component} = useContext(Context)

    const getFullName = (lastName, firstName, patronymic) => {
        return `
                    ${lastName ? lastName[0].toUpperCase() + lastName.substring(1) : ''}
                    ${firstName ? firstName[0].toUpperCase() + firstName.substring(1) : ''}
                    ${patronymic ? patronymic[0].toUpperCase() + patronymic.substring(1) : ''}
                    `
    }

    return (

        <div className={component.dropActive ? `${style.dropdown} ${style.active} ` : `${style.dropdown}`}>
            {users.map(user =>
                <div className={style.item} key={user.id} onClick={() => {
                    selectedUserName(`${user.lastName} ${user.firstName} ${user.patronymic}`);
                    selectedUserId(user.id);
                    component.setDropActive(false)
                }}>
                    <p className={style.login}>@{user.login}</p>
                    <p className={style.name}>{getFullName(user.lastName, user.firstName, user.patronymic)}</p>
                    <p className={style.birthday}>Дата
                        рождения: {user.birthday !== null ? new Date(user.birthday).toLocaleDateString('ru') : 'Не указана'}</p>
                </div>
            )}
        </div>
    )
}
export default DropDown