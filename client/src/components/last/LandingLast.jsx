import { useContext } from 'react';
import styles from './landingLast.module.css'
import { Context } from '../..';
const LandingLast = () => {
    const { component } = useContext(Context)
    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <p className={styles.text}>Хотите записаться или возникли вопросы? Позвоните или оставьте заявку. Мы свяжемся с Вами и наш администратор ответит на все ваши вопросы </p>
                <p className={styles.title}>Мы ждем вас!</p>
                <button
                    className={styles.btn}
                    onClick={() => component.showMainModal()}
                >
                    Записаться</button>
            </div>
        </div>
    )
}
export default LandingLast;