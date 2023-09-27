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
                    <div
                    className={style.block}
                    style={side === '1' || side === '4'? {flexDirection: "row-reverse"} : side === '3' ? {order: 4} : null}>
                        {Object.keys(dentition.list[side]).map((tooth) =>
                                <Tooth
                                key={side+tooth}
                                side={side}
                                toothId={tooth}/>
                        )}
                    </div>
                )
            }
            <DentitionDropdown />
        </div>
    )
})

export default Dentition