import { useContext } from 'react'
import style from './Dentition.module.css'
import { ReactComponent as PartCircle } from './img/part_circle.svg'
import { Context } from '../..'
const Surface = ({ toothId }) => {
    const { dentition } = useContext(Context)
    return (
        <div className={style.surface}>
            {Object.keys(dentition.list[toothId]).map(item =>
                item === '5' ?
                    <div> ТУТ БУДЕТ КРУГ ДЛЯ ЦЕНТРА </div>
                    :
                    <div className={style.wrap_part} key={item} >
                        {dentition.list[toothId][item]}
                        <PartCircle
                            className={style.part_surface}
                            onClick={() => {
                                /*
                                1. SetList задает текущую зубную формулу. Тут просто
                                2. С помощью spread модифицирую в списке объект с индексом,
                                который получаю из toothId
                                3.И уже в этот самый объект с помощью spread получаю все его
                                свойства, но изменяю флаг для стороны зуба. То есть значение
                                Номер стороны хранится в переменной item. Ну как то так
                                */
                                dentition.setList(
                                    
                                    {
                                        ...[dentition.list], [toothId]:
                                            { ...dentition.list[toothId], [item]: '4' }
                                    }
                                );
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