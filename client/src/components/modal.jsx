import { observer } from 'mobx-react-lite';
import { Context } from '..';
import styles from './modal.module.css';
import { useContext, } from 'react';

const Modal = observer(() => {
    const { component } = useContext(Context)
    console.log(component.active)
    return (
        <div className={component.active ? styles.wrap : 'fa'} onClick={() => component.setModal(false)}>
            <div className={styles.block} onClick={(e) => e.stopPropagation()}>
            </div>
        </div>
    );
})

export default Modal;