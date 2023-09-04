import { useContext } from 'react'
import styles from './Main.module.css'
import { Context } from '..'
import { observer } from 'mobx-react-lite'

const MainModal = observer(() => {

    const { component } = useContext(Context)
    return (
        <div className={component.mainModalActive
            ? `${styles.modal_wrap} ${styles.active}` :
            styles.modal_wrap}
            onClick={() => { component.closeMainModal() }}>
            <div className={styles.modal_block}
                onClick={(e) => e.stopPropagation()}>
                <p className={styles.title}>
                    Оставьте свои контактные данные, чтобы мы с вами связались</p>
                <div className={styles.form}>
                    <div className={styles.input_block}>
                        <input className={styles.input} placeholder=' '></input>
                        <p className={styles.input_tip}>Телефон</p>
                    </div>
                    <div className={styles.input_block}>
                        <input className={styles.input} placeholder=' '></input>
                        <p className={styles.input_tip}>ФИО</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default MainModal