import styles from './Services.module.css';

function ServicesItem(props) {
  const list = props.list;
  const listItems = list.map((item) =>
    <li className={styles.item_element}>{item.name}</li>
  );

  return (
    <div className={styles.item}>
      <div className={styles.item_top}>
        <img src={props.img_url}></img>
        <p className={styles.title}>{props.title}</p>
      </div>
      <ul className={styles.item_list}>
        {listItems}
      </ul>
      <div className={styles.btn_wrap}>
        <button className={styles.btn}>Подробнее</button>
      </div>

    </div>
  );
}

export default ServicesItem;
