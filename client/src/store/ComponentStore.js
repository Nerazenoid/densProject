import { makeAutoObservable } from 'mobx'

export default class ComponentStore {
    constructor() {
        this._active = false
        this._body = null
        makeAutoObservable(this)
    }
    setModal = (active) => {
        this._active = active
    }
    get body(){
        return this._body
    }
    get active(){
        return this._active
    }

}