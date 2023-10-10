import { forwardRef, useContext } from 'react';
import styles from './Main.module.css';
import slide from './img/main.jpg'
import { Context } from '..';

const MainSlider = () => {
  const {component} = useContext(Context)
  return (
    <div className={styles.contacts_wrap}>
      <div className={styles.info}>
        <p className={styles.main_title}>Dens-Стоматология</p>
        <p className={styles.text}>Профессиональное лечение ваших зубов на высшем уровне</p>
        <button
        className={styles.main_btn}
        onClick={() => component.showMainModal()}
        >
          Записаться
        </button>
      </div>
      <img src={slide}></img>
    </div>
  );
}

export default MainSlider;
