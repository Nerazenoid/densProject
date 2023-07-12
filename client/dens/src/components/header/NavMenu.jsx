import styles from './NavMenu.module.css';
import {scrolled} from './Header.module.css';

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
        <button className={styles.login_btn}>Войти</button>
      </div>
    </nav>
  );
}

export default NavMenu;
