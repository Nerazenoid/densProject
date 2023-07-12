import styles from './Advantages.module.css';
import AdvanceItem from './Advantages_item.jsx';
import grey from '../grey.jpg'

function Advantages() {

  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <p className={styles.main_title}>Наши преимущества</p>
        <div className={styles.list}>
          <AdvanceItem title="Преимущество 1" description="Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1" img_url={grey} />
          <AdvanceItem title="Преимущество 2" description="Описание 1" img_url={grey} />
          <AdvanceItem title="Преимущество 3" description="Описание 1" img_url={grey} />
          <AdvanceItem title="Преимущество 4" description="Описание 1" img_url={grey} />
        </div>
      </div>
    </div >
  );
}

export default Advantages;
