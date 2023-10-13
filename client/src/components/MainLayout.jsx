import { NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from './img/logoText_white.png'
import { APPOINTMENTS_LIST_ROUTE, LANDING_ROUTE, NEW_APPOINTMENT_ROUTE, REQUESTS_ROUTE, USER_ROUTE } from "../utils/consts";
import { useContext } from "react";
import style from './mainLayuout.module.css'
import { Context } from "..";

function MainLayout() {

    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(LANDING_ROUTE)
    }

    const navlinks = () => {
        if (user.isAuth) {

        }
    }

    return (
        <div>
            <div className={style.header}>
                <div className={style.links_wrap}>
                    <NavLink to='/'>
                        <div className={style.logo_wrap}>
                            <img src={logo} />
                        </div>
                    </NavLink>

                    {user.isAuth === true && user.user.role === 'ADMIN' ?
                        <NavLink to={NEW_APPOINTMENT_ROUTE}>Создать запись</NavLink> :
                        user.isAuth === true && user.user.role === 'USER' ?
                            <NavLink to={NEW_APPOINTMENT_ROUTE}>Записаться</NavLink> :
                            null}

                    {user.isAuth === true && user.user.role === 'ADMIN' ?
                        <NavLink to={APPOINTMENTS_LIST_ROUTE}>Все записи</NavLink> :
                        user.isAuth === true ?
                            <NavLink to={APPOINTMENTS_LIST_ROUTE}> Мои записи</NavLink> :
                            null}

                    {user.isAuth === true && (user.user.role === 'ADMIN' || user.user.role === 'DOCTOR') ?
                        <NavLink to={USER_ROUTE}>Пациенты</NavLink> :
                        null}
                    {user.isAuth === true && user.user.role === 'ADMIN' ?
                        <NavLink to={REQUESTS_ROUTE}>Заявки на звонок</NavLink> :
                        null}
                </div>
                {user.isAuth ?
                    <div className={style.auth_block}>
                        <p className={style.username}>{user.user.login}</p>
                        <button className={style.logout_btn} onClick={() => logOut()}>Выйти</button>
                    </div> :
                    null
                }
            </div>
            <div className={style.body}>
                <Outlet className={style.padding} />
            </div>
            <div className={style.footer}>
            </div>
        </div>
    );
}

export default MainLayout;