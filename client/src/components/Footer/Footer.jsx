import style from './Footer.module.css'
import logo from '../img/logoText_white.png'
import { ReactComponent as Telegram } from '../img/telegram.svg'
import { ReactComponent as VK } from '../img/vk.svg'
import { ReactComponent as WhatsApp } from '../img/whatsapp.svg'
import { ReactComponent as Viber } from '../img/viber.svg'
const Footer = () => {
    return (
        <div className={style.wrap}>
            <div className={style.main}>
                <div className={style.block}>
                    <img className={style.footer_img} src={logo} />
                    <p className={style.row}>г. Пенза, Ленинский р-н,<br /> ул. Гладкова 20, 2 подъезд</p>
                </div>
                <div className={style.block}>
                    <p className={style.title}>Для отзывов</p>
                    <a className={style.link} target='_blank' href='https://yandex.ru/maps/49/penza/?ll=45.012791%2C53.198668&mode=poi&poi%5Bpoint%5D=45.012920%2C53.198393&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1096989544&source=serp_navig&tab=reviews&z=18'>Яндекс.Карты</a>
                    <a className={style.link} target='_blank' href='https://2gis.ru/penza/firm/5911502791909305/tab/reviews/addreview'>2ГИС</a>
                    <a className={style.link} target='_blank' href='https://prodoctorov.ru/penza/lpu/29582-dens-stomatologiya/#rating'>ПроДокторов</a>
                    <a className={style.link} target='_blank' href='https://penza.zoon.ru/medical/stomatologiya_dens-stomatologiya_na_ulitse_gladkova/'>Zoon</a>
                </div>
                <div className={style.block}>
                    <p className={style.title}>Контакты</p>
                    <a className={style.link} href='tel:+78412681709'>Тел: +7 841 268-17-09</a>
                    <a className={style.link} href='tel:+79273897858'>Тел: +7 927 389-78-58</a>
                    <a className={style.link} href='mailto:dens-stoma@inbox.ru'>Email: dens-stoma@inbox.ru</a>
                </div>
                <div className={style.block}>
                    <p className={style.title}>Социальные сети</p>
                    <div className={style.media}>
                        <a href='' target='_blank'><Telegram /></a>
                        <a href='https://vk.com/dens_stomatology' target='_blank'><VK /></a>
                        <a href='' target='_blank'><WhatsApp /></a>
                        <a href='' target='_blank'><Viber /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer