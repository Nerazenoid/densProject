import { useContext } from 'react'
import style from './Dentition.module.css'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const DentitionDropdown = observer(() => {
    const { dentition } = useContext(Context)

    const flags = {
        '': {
            name: 'Нет',
            color: 'white'
        },
        'П': {
            name: 'Пломба',
            color: '#F9F6BB'
        },
        'C': {
            name: 'Кариес',
            color: '#834e3a'
        },
        'P': {
            name: 'Пульпит',
            color: '#ff5c5c'
        },
        'Pt': {
            name: 'Периодонтит',
            color: '#d342d3'
        },
        'R' : {
            name: 'Корень',
            color: '#ffa464'
        }
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
                <div
                    className={style.flag_element}
                    onClick={() => {
                        /*Ладно это то еще зрелище. Я постепенно спускаюсь вниз от стороны к зубу и
                        затем к выбранной поверхности, после чего задаю ей выбранный флаг. Как то так */
                        dentition.setList(
                            {...dentition.list,
                                [dentition.selectedSide] : {
                                    ...dentition.list[dentition.selectedSide],
                                    [dentition.selectedTooth] : {
                                        ...dentition.list[dentition.selectedSide][dentition.selectedTooth],
                                        [dentition.selectedSurf] : flag
                                    }
                                }
                            }
                            /*
                            Старая функция
                            dentition.list.map(tooth =>
                                dentition.list.indexOf(tooth) === dentition.selectedTooth ?
                                    { ...tooth, [dentition.selectedSurf]: flag } : tooth
                            )*/
                        )
                        console.log(dentition.list)
                    }
                    }>
                    <i className={style.color_tip} style={{ backgroundColor: flags[flag].color }}></i>
                    {flag + ' – ' + flags[flag].name}
                </div>)}
        </div>
    )
})

export default DentitionDropdown