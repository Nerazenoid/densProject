import { ReactComponent as Tooth_img } from './img/tooth.svg'
import style from './Dentition.module.css'
import Surface from './Surface'
import { useContext } from 'react'
import { Context } from '../..'

const Tooth = ({ side, toothId }) => {

    const { dentition } = useContext(Context)
    const colors = {
        '': 'white',
        'П': '#F9F6BB',
        'C': '#834e3a',
        'P': '#ff5c5c',
        'Pt': '#d342d3',
        'R': '#ffa464'
    }

    return (
        <div className={style.tooth}>
            <div className={style.tooth_block}>
                <div
                className={style.tooth_tip}
                style={side === '1' || side === '2' ? {top: '30px'} : null}>
                    <p className={style.tooth_name}>{side + toothId}</p>
                    <p className={style.tooth_name}>{dentition.list[side][toothId][0]}</p>
                </div>
                <Tooth_img
                    className={style.tooth_img}
                    style={
                        side <= 2 ? { transform: 'rotate(180deg)', color: colors[dentition.list[side][toothId][0]] } :
                            { color: colors[dentition.list[side][toothId][0]] }
                    }
                    onClick={(e) => {
                        dentition.openDropdown()
                        dentition.setSelectedSide(side)
                        dentition.setSelectedTooth(toothId)
                        dentition.setSelectedSurf(0)
                        dentition.setX(e.clientX)
                        dentition.setY(e.clientY)
                    }} />
            </div>
            <Surface key={toothId} side={side} toothId={toothId} />
        </div>
    )
}
export default Tooth