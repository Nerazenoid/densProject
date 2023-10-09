import styles from './Advantages.module.css';
import AdvanceItem from './Advantages_item.jsx';
import grey from '../grey.jpg';
import rass from '../img/0percent_icon.jpg';
import discount from '../img/discount_icon.jpg';
import location from '../img/location_icon.jpg'
import dentist from '../img/dentist_icon.jpg'

const Advantages = () => {

  const items = [
    {
      title: 'Расположение',
      description: 'Наша клиника находится в самом центре города. Добраться до нас не составит труда',
      img: location
    },
    {
      title: 'Акции',
      description: 'Мы регулярно проводим акции, которые позволяют получить лечение по низким ценам',
      img: discount
    },
    {
      title: 'Специалисты',
      description: 'В нашей клинике работают профессионалы с многолетним стажем',
      img: dentist
    },
    {
      title: 'Рассрочка',
      description: 'Мы предоставляем возможность оплачивать лечение по частям, а не сразу',
      img: rass
    }
  ]

  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <p className={styles.main_title}>Наши преимущества</p>
        <div className={styles.list}>
          {items.map(item => 
          <AdvanceItem key={item.title} title={item.title} description={item.description} img_url={item.img} />
            )}
        </div>
      </div>
    </div >
  );
}

export default Advantages;
