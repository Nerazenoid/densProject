import { forwardRef } from 'react';
import styles from './Main.module.css';
import slide from './Slideplaceholder.png'

const MainSlider = forwardRef((props, ref) => {

  return (
    <div className={styles.contacts_wrap} ref={ref} >
      <img src={slide}></img>
    </div>
  );
})

export default MainSlider;
