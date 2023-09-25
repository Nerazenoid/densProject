import { useContext } from 'react'
import style from './Dentition.module.css'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const DentitionDropdown = observer(() => {
    const { dentition } = useContext(Context)

    const flags = {
        'Кариес': 'brown',
        'Вылечен': 'aqua',
        'Вариант 3': 'green',
        'Вариант 4' : 'gold'
    }
    return (
        <div
            className={dentition.dropdownOpen
                ? `${style.dropdown_wrap} ${style.active}`
                : `${style.dropdown_wrap}`
            }
            style={{ left: dentition.x, top: dentition.y }}
            onMouseLeave={() => dentition.closeDropdown()}
        >
            {Object.keys(flags).map(flag =>
                <div className={style.flag_element}>
                    <i className={style.color_tip} style={{backgroundColor: flags[flag]}}></i>
                    {flag}
                </div>)}
        </div>
    )
})

export default DentitionDropdown