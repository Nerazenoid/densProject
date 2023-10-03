import styles from './NavMenu.module.css';
import { scrolled } from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, USER_ROUTE } from '../../utils/consts';
import { useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';


const NavMenu = observer(({mainRef, serviceRef, reviewRef, contactRef}) => {

  const { user, component } = useContext(Context)

  console.log(user.isAuth)

  return (
    <nav className={styles.main}>
      <ul className={styles.nav_menu}>
        <li className={styles.nav_item} onClick={() => mainRef.current.scrollIntoView({behavior: 'smooth'})}>О нас</li>
        <li className={styles.nav_item} onClick={() => serviceRef.current.scrollIntoView({behavior: 'smooth'})}>Услуги</li>
        <li className={styles.nav_item} onClick={() => reviewRef.current.scrollIntoView({behavior: 'smooth'})}>Отзывы</li>
        <li className={styles.nav_item} onClick={() => contactRef.current.scrollIntoView({behavior: 'smooth'})}>Контакты</li>
      </ul>
      <div>
        <button className={styles.appointment_btn}
        onClick={() => component.showMainModal()}>Записаться на прием</button>

        {user.isAuth ?
          <NavLink
            to={USER_ROUTE + '/' + user.user.login}
            className={styles.login_btn}>
            {'Личный кабинет >'}
          </NavLink>
          :
          <NavLink
            to={LOGIN_ROUTE}
            className={styles.login_btn}>
            Войти
          </NavLink>}

      </div>
    </nav>
  );
})

export default NavMenu;
