import styles from './Reviews.module.css';
import Review from './Review';
import grey from '../grey.jpg'

function Reviews() {

    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <p className={styles.main_title}>Отзывы наших пациентов</p>
                <Review 
                username = "Иван Иванов"
                img_url = {grey}
                body = 'Полное содержание всего отзыва пациента'
                from='Яндекс Карты'
                date='16 декабря 2022'/>
            </div>
        </div>
    );
}

export default Reviews;