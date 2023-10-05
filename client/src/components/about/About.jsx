import style from './about.module.css'
import pic1 from '../img/about1.jpg'
import pic2 from '../img/about2.jpg'
import pic3 from '../img/about3.jpg'
import { forwardRef } from 'react'
const About = forwardRef((props,ref) => {

    const items = [
        {
            title: 'Работаем более 25 лет',
            text: 'DENS-Стоматология открылась в августе 1997 года на улице Гладкова 20. На протяжении многих лет наши специалисты предоставляли стоматологические услуги различных видов и сложности жителям и гостям Пензенской области',
            img: pic1
        },
        {
            title: 'С заботой о пациентах',
            text: 'Наши чуткие администраторы запишут Вас на любое удобное вам время, а врачи позаботятся чтобы оказание услуг прошло аккуратно и безболезненно. Для нас здоровье и самочувствие наших пациентов превыше всего!',
            img: pic2
        },
        {
            title: 'Полный спектр стоматологических услуг',
            text: 'В клинике можно пройти полное обследование полости рта, получить консультацию терапевта, ортопеда или хирурга. Наши врачи внимательно выслушают Вас, ответят на все вопросы и предложат самые оптимальные варианты лечения',
            img: pic3
        }
    ]
    return (
        <div className={style.wrap} ref={ref}>
            <div className={style.block}>
                <p className={style.title}>О нас</p>
                <div className={style.main_block}>
                    {items.map(item =>
                        <div className={style.about_row} key={item.title}>
                            <div className={style.description}>
                                <p className={style.subtitle}>{item.title}</p>
                                <p className={style.text}>{item.text}</p>
                            </div>
                            <div className={style.photo}>
                                <img src={item.img} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})

export default About