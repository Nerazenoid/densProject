import { useContext } from 'react'
import style from './Dentition.module.css'
import Surface from './Surface'
import Tooth from './Tooth'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import DentitionDropdown from './DentitionDropdown'


const Dentition = observer(() => {
    const { dentition } = useContext(Context)


    console.log(dentition.list)
    return (
        <div className={style.main}>
            {
                Object.keys(dentition.list).map((side) =>
                    <div className={style.block}>
                        {Object.keys(dentition.list[side]).map((tooth) =>
                            <div
                                className={style.tooth_block}
                                key={tooth}>
                                <Tooth key={side+tooth} name={side+tooth}/>
                                <Surface key={tooth} side={side} toothId={tooth} />
                            </div>
                        )}
                    </div>
                )
            }
            <DentitionDropdown />
        </div>
    )
})

export default Dentition