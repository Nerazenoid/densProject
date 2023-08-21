import {makeAutoObservable} from 'mobx'

export default class ComponentStore {
    constructor() {
        this._active = false
        this._body = null
        this._dropActive = false
        makeAutoObservable(this)
    }

    setDropActive = (bool) => {
        this._dropActive = bool
    }

    openModal = (body) => {
        this._active = true
        this._body =  'Вы уверены что хотите записаться на' + body + '?'
    }

    closeModal = () => {
        this._active = false
        this._body = null
    }

    get dropActive() {
        return this._dropActive
    }

    get body() {
        return this._body
    }

    get active() {
        return this._active
    }

}