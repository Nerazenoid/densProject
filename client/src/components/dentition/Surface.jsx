import { useContext } from 'react'
import style from './Dentition.module.css'
import { ReactComponent as PartCircle } from './img/part_circle.svg'
import { Context } from '../..'
const Surface = ({ toothId }) => {
    const { dentition } = useContext(Context)

    const colors = {
        'В' : 'white',
        'К' : 'brown',
        'Л' : 'aqua',
        '': 'white'
    }

    return (
        <div className={style.surface}>
            {Object.keys(dentition.list[toothId]).map(item =>
                item === '5' ?
                    <div> ТУТ БУДЕТ КРУГ ДЛЯ ЦЕНТРА </div>
                    :
                    <div className={style.wrap_part} key={item} >
                        <p className={style.flag}>{dentition.list[toothId][item]}</p>
                        <PartCircle
                            className={style.part_surface}
                            style={{
                                color: colors[dentition.list[toothId][item]]
                            }}
                            onClick={(e) => {
                                dentition.openDropdown()
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
                                Но было красиво*/

                                //Наконец то. Что то рабочее *смайлик клоуна*
                                dentition.setList(
                                    dentition.list.map(tooth => 
                                        dentition.list.indexOf(tooth) === toothId ?
                                        {...tooth, [item]: 'Л'} : tooth
                                    )
                                )

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