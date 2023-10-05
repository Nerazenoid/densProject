import { forwardRef } from 'react';
import styles from './Main.module.css';
import slide from './Slideplaceholder.png'

const MainSlider = () => {

  return (
    <div className={styles.contacts_wrap}>
      <img src={slide}></img>
    </div>
  );
}

export default MainSlider;
