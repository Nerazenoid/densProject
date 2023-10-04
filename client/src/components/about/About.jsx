import style from './about.module.css'
import pic1 from '../img/about1.jpg'
import pic2 from '../img/about2.jpg'
import pic3 from '../img/about3.jpg'
const About = () => {
    return (
        <div className={style.wrap}>
            <div className={style.block}>
                <p className={style.title}>О нас</p>
                <div className={style.main_block}>
                    <div className={style.about_row}>
                        <div className={style.description}>
                            <p className={style.subtitle}>Работаем более 25 лет</p>
                            <p className={style.text}>DENS-Стоматология открылась в августе 1997 года на улице Гладкова 20. На протяжении многих лет наши специалисты предоставляли стоматологические услуги различных видов и сложности жителям и гостям Пензенской области </p>
                        </div>
                        <div className={style.photo}>
                            <img src={pic1} />
                        </div>
                    </div>

                    <div className={style.about_row}>
                        <div className={style.photo}>
                            <img src={pic2} />
                        </div>
                        <div className={style.description}>
                            <p className={style.subtitle}>Работаем более 25 лет</p>
                            <p className={style.text}>DENS-Стоматология открылась в августе 1997 года на улице Гладкова 20. На протяжении многих лет наши специалисты предоставляли стоматологические услуги различных видов и сложности жителям и гостям Пензенской области </p>
                        </div>
                    </div>

                    <div className={style.about_row}>
                        <div className={style.description}>
                            <p className={style.subtitle}>Работаем более 25 лет</p>
                            <p className={style.text}>DENS-Стоматология открылась в августе 1997 года на улице Гладкова 20. На протяжении многих лет наши специалисты предоставляли стоматологические услуги различных видов и сложности жителям и гостям Пензенской области </p>
                        </div>
                        <div className={style.photo}>
                            <img src={pic3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About