import styles from './Services.module.css';
import ServiceItem from './Services_item.jsx';
import grey from '../grey.jpg'
import treatment_img from '../img/treatment.jpg'
import surgery_img from '../img/surgery.jpg'
import prot_img from '../img/prot.jpg'
import { forwardRef } from 'react';

const Services = forwardRef((props, ref) => {
  const generalServices = [
    { name: 'Дентальный снимок зуба', price: '2200' },
    { name: 'Пломбирование канала', price: '2000' },
    { name: 'Постановка пломбы', price: '2200' },
    { name: 'Удаление зубных отложений', price: '2200' },
    { name: 'Снятие пломбы', price: '2200' },
    { name: 'Установка штифтов', price: '2200' },
    { name: 'Препарирование зуба', price: '2200' }
  ]
  const surgery = [
    { name: 'Удаление зуба', price: '2000' },
    { name: 'Реплантация', price: '2200' },
    { name: 'Снятие шины', price: '2200' },
    { name: 'Цистэкомия', price: '2200' }
  ]
  const prot = [
    { name: 'Коррекция протеза', price: '2000' },
    { name: 'Изготовление коронки', price: '2200' },
    { name: 'Перелом протеза', price: '2200' },
    { name: 'Напыление коронки', price: '2200' },
    { name: 'Изготовление протеза', price: '2200' },
    { name: 'Изготовление модели из супергипса', price: '2200' }
  ]

  return (
    <div className={styles.wrap} ref={ref}>
      <div className={styles.block}>
        <p className={styles.main_title}>Виды услуг</p>
        <div className={styles.services_list}>
          <ServiceItem key={1} title={'Лечение зубов'} list={generalServices} img_url={treatment_img}></ServiceItem>
          <ServiceItem key={2} title={'Хирургия'} list={surgery} img_url={surgery_img}></ServiceItem>
          <ServiceItem key={3} title={'Протезирование'} list={prot} img_url={prot_img}></ServiceItem>
        </div>
      </div>
    </div >
  );
})

export default Services;
