import {ReactComponent as Tooth_img} from './img/tooth.svg'
import style from './Dentition.module.css'

const Tooth = () => {
    return(
        <div className={style.tooth}>
            <Tooth_img className={style.tooth_img} />
        </div>
    )
}
export default Tooth