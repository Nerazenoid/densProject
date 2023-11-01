import {makeAutoObservable} from "mobx";

export default class DiagnosisStore {
    constructor() {
        this._diagnosesList = []
        this._providedDiagnoses = []
        makeAutoObservable(this)
    }

    get providedDiagnoses() {
        return this._providedDiagnoses
    }

    get diagnosesList() {
        return this._diagnosesList
    }

    setDiagnosesList(diagnoses){
        return this._diagnosesList = diagnoses
    }

    setProvidedDiagnoses() {
        return this._providedDiagnoses
    }
}