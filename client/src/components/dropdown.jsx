import { useContext } from 'react'
import style from '../components/dropdown.module.css'
import { Context } from '..'
const DropDown = ({ users, selectedUserName, selectedUserId}) => {

    const { component } = useContext(Context)
    console.log(users)


    return (
        <div className={component.dropActive ? `${style.dropdown} ${style.active} ` : `${style.dropdown}`}>
            {users.map(user =>
                <div className={style.item} key={user.id} onClick={() => {
                    selectedUserName(`${user.lastName} ${user.firstName} ${user.patronymic}`);
                    selectedUserId(user.id);
                    component.setDropActive(false)
                }}>
                    {user.id}. {user.lastName} {user.firstName} {user.patronymic}
                </div>
            )}
        </div>
    )
}
export default DropDown