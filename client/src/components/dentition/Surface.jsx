import style from './Dentition.module.css'
import { ReactComponent as PartCircle } from './img/part_circle.svg'
const Surface = () => {

    return (
        <div>
            <div className={style.surface}>
                <PartCircle className={style.part_surface}/>
                <PartCircle className={style.part_surface}/>
                <PartCircle className={style.part_surface}/>
                <PartCircle className={style.part_surface}/>
            </div>
        </div>
    )
}

export default Surface 