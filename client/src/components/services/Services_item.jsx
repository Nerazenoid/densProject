import { useContext } from 'react';
import styles from './Services.module.css';
import { Context } from '../..';

function ServicesItem(props) {
  const list = props.list;
  const listItems = list.map((item) =>
    <li key={item.name} className={styles.item_element}>{item.name}</li>
  );

  const {component} = useContext(Context);

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
        <button className={styles.btn} onClick={() => component.showMainModal()}>Записаться</button>
      </div>

    </div>
  );
}

export default ServicesItem;
