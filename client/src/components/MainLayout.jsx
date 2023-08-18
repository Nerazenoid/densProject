import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "./header/Logo";
import { APPOINTMENTS_LIST_ROUTE, LANDING_ROUTE, LOGIN_ROUTE, NEW_APPOINTMENT_ROUTE, TEST_ROUTE, USER_ROUTE } from "../utils/consts";
import { useContext, useEffect } from "react";
import Modal from "./modal";
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

    return (
        <div>
            <div className={style.header}>
                <div className={style.links_wrap}>
                    <NavLink to='/'><Logo /></NavLink>
                    {user.isAuth ? <NavLink to={NEW_APPOINTMENT_ROUTE}>Записаться</NavLink> : null}
                    {user.isAuth && user.user.role === 'DOCTOR' ?<NavLink to={APPOINTMENTS_LIST_ROUTE}>Записи</NavLink> : null}
                    <NavLink to={USER_ROUTE}>Пользователи</NavLink>
                </div>
                {user.isAuth ?
                    <button className={style.logout_btn} onClick={() => logOut()}>Выйти</button> :
                    null
                }
            </div>
            <div className={style.body}>
                <Outlet className={style.padding} />
            </div>
        </div>
    );
}

export default MainLayout;