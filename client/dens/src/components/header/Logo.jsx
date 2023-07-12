import styles from './Header.module.css';

function Logo() {

  return (
    <div className={styles.logo_wrap}>
      <div className={styles.logo_text} alt='Логотип'></div>
    </div>
  );
}

export default Logo;
