import styles from './Advantages.module.css';
import AdvanceItem from './Advantages_item.jsx';
import grey from '../grey.jpg'

const Advantages = () => {

  const items = [
    {
      title: 'Расположение',
      description: 'Наша клиника находится в самом центре города. Добраться до нас не составит труда',
      img: grey
    },
    {
      title: 'Акции',
      description: 'Мы регулярно проводим акции, которые позволяют получить лечение по низким ценам',
      img: grey
    },
    {
      title: 'Специалисты',
      description: 'В нашей клинике работают профессионалы с многолетним стажем',
      img: grey
    },
    {
      title: 'Рассрочка',
      description: 'Мы предоставляем возможность оплачивать лечение по частям, а не сразу',
      img: grey
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
