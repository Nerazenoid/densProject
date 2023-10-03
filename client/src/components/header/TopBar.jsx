import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import NavMenu from './NavMenu.jsx';
import Logo from './Logo.jsx';
import HeaderContacts from './headerContacts.jsx';

const TopBar = ({mainRef, serviceRef, reviewRef, contactRef}) => {

  //Проверка положения окна
  const [scroll, setScroll] = useState(false);
  useEffect(() => {

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 60)
    })
  })

  return (
    <div className={`${styles.topbar_wrap} ${scroll ? 'scrolled' : ''}`}>
      <header className={styles.header_wrap}>
        <div className={styles.header}>
          <Logo />
          <HeaderContacts />
        </div>
        <NavMenu mainRef={mainRef} serviceRef={serviceRef} reviewRef={reviewRef} contactRef={contactRef}/>
      </header>
    </div>
  );
}

export default TopBar;
