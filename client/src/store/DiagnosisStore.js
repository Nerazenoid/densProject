import {makeAutoObservable} from "mobx";

export default class DiagnosisStore {
    constructor() {
        this._diagnosesList = []
        this._providedDiagnoses = []
        this._diagnosesInfo = [{
            complaints: '',
            objective: '',
            probing: '',
            treatment: '',
            description: '',
            tooth: '',
            surface: '',
            diagnosis: '',
            id: Date.now()
        }]
        makeAutoObservable(this)
    }

    get diagnosesInfo() {
        return this._diagnosesInfo
    }

    get providedDiagnoses() {
        return this._providedDiagnoses
    }

    get diagnosesList() {
        return this._diagnosesList
    }

    setDiagnosesList(diagnoses) {
        return this._diagnosesList = diagnoses
    }

    setDiagnosesInfo(diagnosesInfo) {
        return this._diagnosesInfo = diagnosesInfo
    }

    setProvidedDiagnoses() {
        return this._providedDiagnoses
    }
}