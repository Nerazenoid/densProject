import {ReactComponent as Tooth_img} from './img/tooth.svg'
import style from './Dentition.module.css'

const Tooth = ({name}) => {
    return(
        <div className={style.tooth}>
            <p className={style.tooth_name}>{name}</p>
            <Tooth_img className={style.tooth_img} />
        </div>
    )
}
export default Tooth