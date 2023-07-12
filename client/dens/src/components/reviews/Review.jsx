import styles from './Reviews.module.css';
import gray from '../grey.jpg'

function Review(props) {

    return (
        <div className={styles.item}>
            <div className={styles.item_head}>
                <div className={styles.item_img}>
                    <img src={props.img_url} />
                </div>
                <div className={styles.item_info}>
                    <p className={styles.user}>{props.username}</p>
                    <p className={styles.item_from}>{props.from}</p>
                </div>
            </div>
            <p className='body'>{props.body}</p>
            <p className={styles.date}>{props.date}</p>
        </div>
    );
}

export default Review;