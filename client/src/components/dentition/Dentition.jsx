import { useContext } from 'react'
import style from './Dentition.module.css'
import Surface from './Surface'
import Tooth from './Tooth'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'


const Dentition = observer(() => {
    const { dentition } = useContext(Context)
    console.log(dentition.list)
    return (
        <div className={style.main}>
            <div className={style.block}>
                {
                    dentition.list.map((record) =>
                        <div
                            className={style.tooth_block}
                            key={dentition.list.indexOf(record)}>
                            <Tooth />
                            <Surface key={dentition.list.indexOf(record)} toothId={dentition.list.indexOf(record)} />
                        </div>
                    )
                }
            </div>
            <div className={style.block}></div>
            <div className={style.block}></div>
            <div className={style.block}></div>
        </div>
    )
})

export default Dentition