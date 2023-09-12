import styles from './Header.module.css';

const headerContacts = () => {

  return (
    <div className={styles.contacts_wrap}>
      <ul className={styles.contacts_list}>
        <li className={styles.contacts_phone}>
          <a href='tel:+78008008888'>+7 800 800-88-88</a>
        </li>
        <li className={styles.contacts_phone}>
          <a href='tel:+78008008888'>+7 800 800-88-88</a>
        </li>
      </ul>
    </div>
  );
}

export default headerContacts;
