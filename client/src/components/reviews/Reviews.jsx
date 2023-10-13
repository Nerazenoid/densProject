import styles from './Reviews.module.css';
import Review from './Review';
import { forwardRef, useRef} from 'react';

const Reviews = forwardRef((props, ref) => {
    const listRef = useRef(null)
    const next = useRef(null)
    const prev = useRef(null)

    const reviewsList = [
        {
            username: "Алсу Аширова",
            img_url: '/user1.jpg',
            body: 'По всем зубным проблемам обращаемся в эту клинику. Нам все нравится. В последний раз лечили зубы вместе с мужем одновременно. Доктора Наталья Юрьевна и Ксения Евгеньевна, очень грамотные специалисты. Все оборудование современное, все снимки можно сделать в клинике. Приветливый администратор. Советуем эту клинику всем своим родным и друзьям',
            from: 'Яндекс Карты',
            date: '3 июля 2023'
        },
        {
            username: "Звездина Вероника",
            img_url: '/user2.jpg',
            body: 'Хорошая стоматология Обратилась с зубной болью, лечил Валерий Викторович, очень добрый доктор, внимательный. Хорошая атмосфера, даже не было страшно Удобно что не пришлось искать парковку в центре города, есть парковочные места на территории клиники. Рекомендую',
            from: 'Яндекс Карты',
            date: '10 июня 2023'
        },
        {
            username: "Татьяна Кусмарцева",
            img_url: '/user3.jpg',
            body: 'В этой клинике я лечу зубы у Горожанкиной Натальи Юрьевны, очень довольна врачом, грамотная, обходительная, помогла исправить ошибки прежних стоматологов. Очень рекомендую врача и клинику!',
            from: 'Яндекс Карты',
            date: '11 августа 2023'
        },
        {
            username: "Виталя К.",
            img_url: '/profile.jpg',
            body: 'Врачи профессионалы с большой буквы. Особая благодарность врачу-терапевту Наталье Юрьевне.Была проблема с зубом, острая боль под коронкой. Во многих клиниках мне отказали в приёме, только по записи, а здесь приняли и помогли. Залечили зуб не снимая коронки. Теперь буду посещать только эту клинику. Спасибо Вам огромное!!!!',
            from: 'Яндекс Карты',
            date: '22 августа 2021'
        },
        {
            username: "+7-986-93XXXXX",
            img_url: '/profile.jpg',
            body: 'В клинике тактичное и доброе отношение к пациентам. Всё расскажут, проконсультируют подробно. В этой стоматологии принимает замечательный специалист, Мишинева Ирина Владимировна. Она - точно мастер своего дела, ставили мне металлокерамику, от своих зубов не отличить.',
            from: 'prodoctorov.ru',
            date: '15 июля 2022'
        },
        {
            username: "Ольга Гладилина",
            img_url: '/user4.jpg',
            body: 'Уже порядка 15 лет лечусь в Дэнс стоматологии, и моя семья тоже. Отличные специалисты. Особенно хочу отметить хирурга Пушкина',
            from: 'Яндекс Карты',
            date: '19 декабря 2021'
        },
        {
            username: "Лариса Толокнова",
            img_url: '/user5.jpg',
            body: 'Очень внимательные доктора. Прежде чем что-то начать лечить, всё подробно расскажут и тебя обо всем распросят. Только сюда теперь буду обращаться, и всем советую.',
            from: 'Яндекс Карты',
            date: '9 июля 2023'
        },
        {
            username: "Ольга",
            img_url: '/user6.jpg',
            body: 'Отличная клиника. Лечилась у Горожанкиной Натальи Юрьевной. Сложилось только положительное впечатление от профессионализма работы врача.',
            from: 'Яндекс Карты',
            date: '29 августа 2023'
        },
        {
            username: "Вадим Д.",
            img_url: '/user7.jpg',
            body: 'По случаю обратился в ближайшую стоматологию. Расположение было удобным, в центре. Лечением остался довольным, объяснили всё понятно и чётко. Снимок зуба показал всё что нужно. Цены адекватные, всем советую. Благодарен всему коллективу!',
            from: 'Яндекс Карты',
            date: '14 марта 2020'
        },
        {
            username: "Анна Понамарева",
            img_url: '/profile.jpg',
            body: 'Уже много лет тут лечим зубы всей семьёй. Очень хорошие врачи! Результат тоже всегда радует, качественное лечение зубов! Очень понравился врач Алексеев Валерий Викторович! Большая Вам благодарность за качественную работу и хорошее отношение!!',
            from: '2GIS',
            date: '27 сентября 2022'
        }
    ]


    const scroll = (toRight) => {

        const scrollAmount = 320 * (toRight ? 1 : -1)
        const scrollPoint = listRef.current.scrollLeft + scrollAmount

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
                        {reviewsList.map(review =>
                            <Review
                                key={review.username}
                                username={review.username}
                                img_url={review.img_url}
                                body={review.body}
                                from={review.from}
                                date={review.date}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
})
export default Reviews;