import { useContext } from 'react';
import styles from './TopBarMobile.module.css'
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import logo from '../../logo.png'
import { NavLink } from 'react-router-dom';
import { USER_ROUTE, LOGIN_ROUTE } from '../../../utils/consts';


const TopBarMobile = observer(({mainRef, serviceRef, reviewRef, contactRef}) => {
    const { component, user } = useContext(Context)
    const scrollToBlock = (block) => {
        component.closeMobileNav()
        let offset = 80
        let scroll = block.offsetTop - offset;
        window.scrollTo({
          top: scroll,
          behavior: 'smooth'
        })
      }

    return (
        <div className={styles.wrap}>
            <div className={styles.main}>
                <button
                    className={styles.navbar_btn}
                    onClick={() =>
                        component.mobileNavShown ?
                            component.closeMobileNav() :
                            component.openMobileNav()}
                >
                </button>
                <img src={logo} />
                {user.isAuth ?
                    <NavLink
                        to={USER_ROUTE + '/' + user.user.login}
                        className={styles.login_btn}>
                    </NavLink>
                    :
                    <NavLink
                        to={LOGIN_ROUTE}
                        className={styles.login_btn}>
                    </NavLink>}
            </div>
            <ul className={component.mobileNavShown ? `${styles.navbar} ${styles.opened}` : `${styles.navbar}`}>
                <li onClick={() => scrollToBlock(mainRef.current)}>О нас</li>
                <li onClick={() => scrollToBlock(serviceRef.current)}>Услуги</li>
                <li onClick={() => scrollToBlock(reviewRef.current)}>Отзывы</li>
                <li onClick={() => scrollToBlock(contactRef.current)}>Контакты</li>
            </ul>
        </div>
    )
})
export default TopBarMobile;