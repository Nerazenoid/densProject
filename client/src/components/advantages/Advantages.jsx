import styles from './Advantages.module.css';
import AdvanceItem from './Advantages_item.jsx';
import grey from '../grey.jpg'

function Advantages() {

  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <p className={styles.main_title}>Наши преимущества</p>
        <div className={styles.list}>
          <AdvanceItem title="Удобное расположение" description="Описание 1 Описание 1 Описание 1 Описание 1 Описание 1 Описание 1" img_url={grey} />
          <AdvanceItem title="Постоянные акции" description="Описание 1" img_url={grey} />
          <AdvanceItem title="Опытные специалисты" description="Описание 1" img_url={grey} />
          <AdvanceItem title="Низкие цены" description="Описание 1" img_url={grey} />
        </div>
      </div>
    </div >
  );
}

export default Advantages;
