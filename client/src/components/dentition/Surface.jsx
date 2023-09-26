import { useContext } from 'react'
import style from './Dentition.module.css'
import { ReactComponent as PartCircle } from './img/part_circle.svg'
import { ReactComponent as Circle } from './img/circle.svg'
import { Context } from '../..'
const Surface = ({ side, toothId }) => {
    const { dentition } = useContext(Context)

    const colors = {
        '': 'white',
        'К': 'brown',
        'Л': 'aqua',
        'Ж': 'green',
        'Ф': 'gold'
    }

    return (
        <div className={style.surface}>
            {Object.keys(dentition.list[side][toothId]).map(item =>
                item === '5' ?
                    <div className={style.wrap_part} key={item}>
                        <p className={style.flag}>{dentition.list[side][toothId][item]}</p>
                        <Circle
                            className={style.part_surface}
                            style={{
                                color: colors[dentition.list[side][toothId][item]]
                            }}
                            onClick={(e) => {
                                dentition.openDropdown()
                                dentition.setSelectedSide(side)
                                dentition.setSelectedTooth(toothId)
                                dentition.setSelectedSurf(item)
                                dentition.setX(e.clientX)
                                dentition.setY(e.clientY)
                            }} />
                    </div>
                    :
                    <div className={style.wrap_part} key={item} >
                        <p className={style.flag}>{dentition.list[side][toothId][item]}</p>
                        <PartCircle
                            className={style.part_surface}
                            style={{
                                color: colors[dentition.list[side][toothId][item]]
                            }}
                            onClick={(e) => {
                                dentition.openDropdown()
                                dentition.setSelectedSide(side)
                                dentition.setSelectedTooth(toothId)
                                dentition.setSelectedSurf(item)
                                dentition.setX(e.clientX)
                                dentition.setY(e.clientY)
                                /*
                                1. SetList задает текущую зубную формулу. Тут просто
                                2. С помощью spread модифицирую в списке объект с индексом,
                                который получаю из toothId
                                3.И уже в этот самый объект с помощью spread получаю все его
                                свойства, но изменяю флаг для стороны зуба. То есть значение
                                Номер стороны хранится в переменной item. Ну как то так
                                P.S. Ладно. Оно не сработало опять из за тупой разницы в массивах и объектах
                                Но было красиво

                                //Наконец то. Что то рабочее *смайлик клоуна* */

                                console.log(dentition.list)
                            }
                            }
                        />
                    </div>
            )}
        </div>
    )
}

export default Surface 