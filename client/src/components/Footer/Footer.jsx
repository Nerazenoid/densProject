import style from './Footer.module.css'
import logo from '../logoText.png'
const Footer = () => {
    return (
        <div className={style.wrap}>
            <div className={style.main}>
                <div className={style.block}>
                    <img className={style.footer_img} src={logo} />
                </div>
                <div className={style.block}>
                    <p className={style.title}>Контакты</p>
                </div>
                <div className={style.block}>
                    <p className={style.title}>Соцсети</p>
                </div>
            </div>
        </div>
    )
}
export default Footer