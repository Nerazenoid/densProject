import style from './Dentition.module.css'
import Surface from './Surface'
import Tooth from './Tooth'

const Dentition = () => {
    return (
        <div className={style.main}>
            <div className={style.block}>
                <div className={style.tooth_block}>
                    <Tooth />
                    <Surface />
                </div>
                <div className={style.tooth_block}>
                    <Tooth />
                </div>
                <div className={style.tooth_block}>
                    <Tooth />
                </div>
            </div>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
        </div>
    )
}

export default Dentition