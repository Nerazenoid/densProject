import { useContext, useState } from 'react'
import styles from './Main.module.css'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import { createRequest } from '../http/requestAPI'

const MainModal = observer(() => {

    const [phone, setPhone] = useState('')
    const [fullname, setFullname] = useState('')
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
                        <input
                            className={styles.input}
                            placeholder=' '
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        >
                        </input>
                        <p className={styles.input_tip}>Телефон</p>
                    </div>
                    <div className={styles.input_block}>
                        <input
                            className={styles.input}
                            placeholder=' '
                            value={fullname}
                            onChange={e => setFullname(e.target.value)}
                        >
                        </input>
                        <p className={styles.input_tip}>ФИО</p>
                    </div>
                    <div>
                        <button
                            className={styles.submit_btn}
                            onClick={() => createRequest(phone, fullname)}
                        >Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default MainModal