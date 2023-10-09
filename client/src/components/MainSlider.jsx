import { forwardRef } from 'react';
import styles from './Main.module.css';
import slide from './img/main.jpg'

const MainSlider = () => {

  return (
    <div className={styles.contacts_wrap}>
      <img src={slide}></img>
    </div>
  );
}

export default MainSlider;
