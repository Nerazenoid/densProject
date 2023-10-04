import styles from './Header.module.css';

const headerContacts = () => {

  return (
    <div className={styles.contacts_wrap}>
      <ul className={styles.contacts_list}>
        <li className={styles.contacts_phone}>
          <a href='tel:+78412681709'>+7 841 268-17-09</a>
        </li>
        <li className={styles.contacts_phone}>
          <a href='tel:+79273897858'>+7 927 389-78-58</a>
        </li>
      </ul>
    </div>
  );
}

export default headerContacts;
