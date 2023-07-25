import styles from './NavMenu.module.css';
import {scrolled} from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';


function NavMenu() {

  return (
    <nav className={styles.main}>
      <ul className={styles.nav_menu}>
        <li className={styles.nav_item}>О нас</li>
        <li className={styles.nav_item}>Услуги</li>
        <li className={styles.nav_item}>Врачи</li>
        <li className={styles.nav_item}>Контакты</li>
        <li className={styles.nav_item}>Подробнее</li>
      </ul>
      <div>
        <button className={styles.appointment_btn}>Записаться на прием</button>
        <NavLink 
        to={LOGIN_ROUTE}
        className={styles.login_btn}
        >Войти</NavLink>
      </div>
    </nav>
  );
}

export default NavMenu;
