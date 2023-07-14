import styles from './Main.module.css';
import slide from './Slideplaceholder.png'

function MainSlider() {

  return (
    <div className={styles.contacts_wrap}>
      <img src={slide}></img>
    </div>
  );
}

export default MainSlider;
