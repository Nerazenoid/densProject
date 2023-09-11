import styles from './Reviews.module.css';
import Review from './Review';
import grey from '../grey.jpg'
import { useRef } from 'react';
import { useEffect } from 'react';

function Reviews() {
    const listRef = useRef(null)

    const scroll = (toRight) => {
        listRef.current.scrollBy({
            left: 400 * (toRight ? 1 : -1),
            behavior: "smooth"
        })
    }

    const onWheel = (e) => {
        const scrollAmount = e.deltaY * 4

        listRef.current.scrollTo({
            top: 0,
            left: listRef.current.scrollLeft + scrollAmount,
            behavior: 'smooth'
        })
    }

    const preventDefault = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.block}>
                <p className={styles.main_title}>Отзывы наших пациентов</p>
                <div className={styles.carousel}
                    onMouseEnter={() =>
                        document.addEventListener('wheel', preventDefault, { passive: false })
                    }
                    onMouseLeave={() =>
                        document.removeEventListener('wheel', preventDefault)
                    }

                    onWheel={(e) => onWheel(e)}>
                    <div>
                        <button className={styles.next_btn} onClick={() => scroll(true)}>&gt;</button>
                        <button className={styles.prev_btn} onClick={() => scroll(false)}>&lt;</button>
                    </div>
                    <div className={styles.reviews_list}
                        ref={listRef}>
                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />

                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />

                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />

                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />

                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />

                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />
                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />
                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />
                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />
                        <Review
                            username="Иван Иванов"
                            img_url={grey}
                            body='Полное содержание всего отзыва пациента'
                            from='Яндекс Карты'
                            date='16 декабря 2022' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;