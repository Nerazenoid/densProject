import {useContext, useEffect, useState} from "react";
import style from './diagnosis.module.css'
import Dropdown from './diagnosisDropdown'
import Item from "./item";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getDiagnoses, getDiagnosis} from "../../http/diagnosesAPI";

const Diagnosis = observer(() => {

    const {diagnosis} = useContext(Context)

    useEffect(() => {
        getDiagnoses()
            .then(data => diagnosis.setDiagnosesList(data))
    }, [])

    const [diagnosisInfo, setDiagnosisInfo] = useState([{
        complaints: '',
        objective: '',
        probing: '',
        treatment: '',
        description: '',
        tooth: '',
        surface: '',
        diagnosis: '',
        id: Date.now()
    }])


    const changeInput = (key, value, id) => {
        setDiagnosisInfo(diagnosisInfo.map(item =>
            item.id === id ?
                {...item, [key]: value}
                : item))
        console.log(diagnosisInfo)
    }

    const switchDiagnosis = (blockItemId, diagnosisid) => {
        console.log(diagnosisid)
        getDiagnosis(diagnosisid).then(data =>
            setDiagnosisInfo(diagnosisInfo.map(item =>
                item.id === blockItemId ?
                    {
                        ...item,
                        'diagnosis': data.name,
                        'complaints': data.complaints_def,
                        'objective': data.objective_def,
                        'probing': data.probing_def,
                        'treatment': data.treatment_def
                    } : item))
        )
    }

    const addDiagnosis = () => {
        setDiagnosisInfo([...diagnosisInfo, {
            complaints: '',
            objective: '',
            probing: '',
            treatment: '',
            description: '',
            tooth: '',
            surface: '',
            diagnosis: '',
            id: Date.now()
        }])
    }

    const nextStep = () =>{

    }

    return (
        // Впервые использую DOT-нотации или как они там называются
        <div>
            {diagnosisInfo.map(blockItem =>
                <div className={style.block}>
                    <div className={style.flex_row}>
                        <input
                            className={style.input_tooth}
                            value={blockItem.tooth}
                            onChange={e => changeInput('tooth', e.target.value, blockItem.id)}
                            placeholder='Зуб'/>
                        <input
                            className={style.input_surface}
                            value={blockItem.surface}
                            onChange={e => changeInput('surface', e.target.value, blockItem.id)}
                            placeholder='Поверхности'/>


                        <Dropdown>
                            <Dropdown.Toggle>{blockItem.diagnosis || 'Выберите диагноз'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {diagnosis.diagnosesList.map(listItem =>
                                    <Dropdown.Item
                                        onClick={() => switchDiagnosis(blockItem.id, listItem.id)}>{listItem.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    <div className={style.flex_row}>

                        <div className={style.input_block}>
                            <p className={style.subtitle}>Жалобы:</p>
                            <textarea className={style.textarea}
                                      value={blockItem.complaints}
                                      onChange={e => changeInput('complaints', e.target.value, blockItem.id)}>
                            </textarea>
                        </div>
                    </div>
                    <div className={style.flex_row}>
                        <div className={style.input_block}>
                            <p className={style.subtitle}>Объективно:</p>
                            <textarea className={`${style.textarea} ${style.small}`}
                                      value={blockItem.objective}
                                      onChange={e => changeInput('objective', e.target.value, blockItem.id)}>
                            </textarea>
                        </div>
                        <div className={style.input_block}>
                            <p className={style.subtitle}>Зондирование:</p>
                            <textarea className={`${style.textarea} ${style.small}`}
                                      value={blockItem.probing}
                                      onChange={e => changeInput('probing', e.target.value, blockItem.id)}>
                            </textarea>
                        </div>
                        <div className={style.input_block}>
                            <p className={style.subtitle}>Описание:</p>
                            <textarea className={`${style.textarea} ${style.small}`}
                                      value={blockItem.description}
                                      onChange={e => changeInput('description', e.target.value, blockItem.id)}>
                            </textarea>
                        </div>
                    </div>

                    <div className={style.flex_row}>

                        <div className={`${style.input_block} ${style.large}`}>
                            <p className={style.subtitle}>Лечение:</p>
                            <textarea className={`${style.textarea} ${style.large}`}
                                      value={blockItem.treatment}
                                      onChange={e => changeInput('treatment', e.target.value, blockItem.id)}>
                            </textarea>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={addDiagnosis}>Добавить</button>
        </div>
    )
})
export default Diagnosis