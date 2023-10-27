import {useContext, useEffect, useState} from "react";
import style from './diagnosis.module.css'
import Dropdown from './diagnosisDropdown'
import Item from "./item";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {getDiagnoses} from "../../http/diagnosesAPI";

const Diagnosis = observer(() => {

    const {diagnosis} = useContext(Context)
    let diagnosesList = []

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
        diagnosis: {},
        id: Date.now()
    }])


    const changeInput = (key, value, id) => {
        setDiagnosisInfo(diagnosisInfo.map(item => item.id === id ? {...item, [key]: value} : item))
        console.log(diagnosisInfo)
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
            diagnosis: {},
            id: Date.now()
        }])
    }

    return (
        // Впервые использую DOT-нотации или как они там называются
        <div>
            {diagnosisInfo.map(blockItem =>
                <div className={style.block}>
                    <div className={style.flex_row}>
                        <input className={style.input_tooth} placeholder='Зуб'/>
                        <input className={style.input_surface} placeholder='Поверхности'/>


                        <Dropdown>
                            <Dropdown.Toggle>{blockItem.diagnosis.name || 'Выберите диагноз'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {diagnosis.diagnosesList.map(listItem =>
                                    <Dropdown.Item
                                        onClick={() => changeInput('diagnosis', listItem, blockItem.id)}>{listItem.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    <div className={style.flex_row}>

                        <div className={style.input_block}>
                            <p className={style.subtitle}>Жалобы:</p>
                            <textarea className={style.textarea}
                                      onChange={e => changeInput('complaints', e.target.value, blockItem.id)}>
                            </textarea>
                        </div>

                        <div className={style.input_block}>
                            <p className={style.subtitle}>Объективно:</p>
                            <textarea className={style.textarea}
                                      onChange={e => changeInput('objective', e.target.value, blockItem.id)}>
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