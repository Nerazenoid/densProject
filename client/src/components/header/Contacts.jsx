import styles from './Header.module.css';

function Contacts() {

  return (
    <div className={styles.contacts_wrap}>
      <ul className={styles.contacts_list}>
        <li className={styles.contacts_phone}>+7 800 800-88-88</li>
        <li className={styles.contacts_phone}>+7 800 800-88-88</li>
      </ul>
    </div>
  );
}

export default Contacts;
