import styles from './Reviews.module.css';
import Review from './Review';
import grey from '../grey.jpg'
import { forwardRef, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

const Reviews = forwardRef((props, ref) => {
    const listRef = useRef(null)
    const next = useRef(null)
    const prev = useRef(null)


    const scroll = (toRight) => {

        const scrollAmount = 320 * (toRight ? 1 : -1)
        const scrollPoint = listRef.current.scrollLeft + scrollAmount
        console.log(listRef.current.scrollWidth)
        console.log(scrollPoint)

        listRef.current.scrollTo({
            left: scrollPoint,
            behavior: 'smooth'
        })
        if (scrollPoint <= 0) {
            prev.current.classList.add(styles.hide)
        }
        else {
            prev.current.classList.remove(styles.hide)
        }
        if (scrollPoint + listRef.current.offsetWidth >= listRef.current.scrollWidth) {
            next.current.classList.add(styles.hide)
        }
        else {
            next.current.classList.remove(styles.hide)
        }
    }

    //Да, я просто засунул условие направления скролла в параметр. И что мне за это сделаете?
    const onWheel = (e) => {
        console.log(e.deltaY)
        scroll(e.deltaY > 0)
    }

    const preventDefault = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.wrap} ref={ref}>
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
                        <button ref={prev} className={`${styles.prev_btn} ${styles.hide}`} onClick={() => scroll(false)}>&lt;</button>
                        <button ref={next} className={styles.next_btn} onClick={() => scroll(true)}>&gt;</button>
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
})
export default Reviews;