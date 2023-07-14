import styles from './Advantages.module.css';

function AdvantagesItem(props) {

  return (
    <div className={styles.item}>
      <div className={styles.item_img}>
        <img src={props.img_url} />
      </div>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
}

export default AdvantagesItem;
