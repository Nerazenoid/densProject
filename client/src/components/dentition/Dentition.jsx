import { useContext, useEffect, useState } from 'react'
import style from './Dentition.module.css'
import Surface from './Surface'
import Tooth from './Tooth'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'
import DentitionDropdown from './DentitionDropdown'
import { getDentition } from '../../http/appointmentAPI'


const Dentition = observer(({ user_id }) => {
    const { dentition } = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getDentition(user_id)
            .then(data => {
                console.log(data.dentition)
                dentition.setList(data.dentition)
            })
            .finally(() =>
                setLoading(false))
    }, [])

    console.log(user_id)
    if (loading) {
        return (<div>Загрузка</div>)
    }
    return (
        <div className={style.main}>
            {
                Object.keys(dentition.list).map((side) =>
                    <div
                        className={style.block}
                        style={side === '1' || side === '4' ? { flexDirection: "row-reverse" } : side === '3' ? { order: 4 } : null}>
                        {Object.keys(dentition.list[side]).map((tooth) =>
                            <Tooth
                                key={side + tooth}
                                side={side}
                                toothId={tooth} />
                        )}
                    </div>
                )
            }
            <DentitionDropdown />
        </div>
    )
})

export default Dentition