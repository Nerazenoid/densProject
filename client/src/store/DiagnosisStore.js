import {makeAutoObservable} from "mobx";

export default class DiagnosisStore {
    constructor() {
        this._selectedDiagnosis = {}
        this._diagnosesList = []
        makeAutoObservable(this)
    }

    get selectedDiagnosis() {
        return this._selectedDiagnosis
    }
    get diagnosesList() {
        return this._diagnosesList
    }
    setSelectedDiagnosis(diagnosisId){
        this._selectedDiagnosis = diagnosisId
    }
    setDiagnosesList(diagnoses){
        return this._diagnosesList = diagnoses
    }
}