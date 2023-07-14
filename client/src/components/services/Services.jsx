import styles from './Services.module.css';
import ServiceItem from './Services_item.jsx';
import grey from '../grey.jpg'
import placeholder from '../placeholder_service.jpg'

function Services() {
  const generalServices = [
    { name: 'Удаление зубов', price: '2000' },
    { name: 'Лечение зубов', price: '2200' },
    { name: 'Лечение зубов', price: '2200' },
    { name: 'Лечение зубов', price: '2200' },
    { name: 'Лечение зубов', price: '2200' },
    { name: 'Лечение зубов', price: '2200' }
  ]
  const surgery = [
    { name: 'Удаление зуба', price: '2000' },
    { name: 'Лечение зуба', price: '2200' }
  ]

  return (
    <div className={styles.wrap}>
      <div className={styles.block}>
        <p className={styles.main_title}>Виды услуг</p>
        <div className={styles.services_list}>
          <ServiceItem title={'Общие услуги'} list={generalServices} img_url={placeholder}></ServiceItem>
          <ServiceItem title={'Хирургия'} list={surgery} img_url={placeholder}></ServiceItem>
          <ServiceItem title={'Лечение'} list={surgery} img_url={placeholder}></ServiceItem>
        </div>
      </div>
    </div >
  );
}

export default Services;
