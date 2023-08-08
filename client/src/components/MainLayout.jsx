import { NavLink, Outlet } from "react-router-dom";
import Logo from "./header/Logo";
import { APPOINTMENTS_LIST_ROUTE, LOGIN_ROUTE, NEW_APPOINTMENT_ROUTE, TEST_ROUTE } from "../utils/consts";
import { useEffect } from "react";
import Modal from "./modal";
import style from './mainLayuout.module.css'

function MainLayout() {
    return (
        <div>
            <div className={style.header}>
                <NavLink to='/'><Logo /></NavLink>
                <NavLink to={LOGIN_ROUTE}>Логин</NavLink>
                <NavLink to={NEW_APPOINTMENT_ROUTE}>Записаться</NavLink>
                <NavLink to={APPOINTMENTS_LIST_ROUTE}>Записи</NavLink>
            </div>
            <div className={style.body}>
                <Outlet className={style.padding} />
            </div>
        </div>
    );
}

export default MainLayout;