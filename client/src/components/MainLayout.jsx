import { NavLink, Outlet } from "react-router-dom";
import Logo from "./header/Logo";
import { LOGIN_ROUTE, TEST_ROUTE } from "../utils/consts";

function MainLayout() {
    return (
        <div>
            <NavLink to={LOGIN_ROUTE}>Логин</NavLink>
            <NavLink to={TEST_ROUTE}>Тест</NavLink>
            <NavLink to='/'>Главная</NavLink>
            <Logo />
            <Outlet />
        </div>
    );
}

export default MainLayout;