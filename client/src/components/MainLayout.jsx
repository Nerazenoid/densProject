import { NavLink, Outlet } from "react-router-dom";
import Logo from "./header/Logo";
import { LOGIN_ROUTE, NEW_APPOINTMENT_ROUTE, TEST_ROUTE } from "../utils/consts";
import { useEffect } from "react";
import Modal from "./modal";

function MainLayout() {
    return (
        <div>
            <NavLink to={LOGIN_ROUTE}>Логин</NavLink>
            <NavLink to={NEW_APPOINTMENT_ROUTE}>Записаться</NavLink>
            <NavLink to='/'>Главная</NavLink>
            <Logo />
            <Outlet />
        </div>
    );
}

export default MainLayout;