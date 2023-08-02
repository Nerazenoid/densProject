import {makeAutoObservable} from 'mobx'

export default class ComponentStore {
    constructor() {
        this._active = false
        this._body = null
        makeAutoObservable(this)
    }

    openModal = (body) => {
        this._active = true
        this._body =  'Вы уверены что хотите записаться на' + body + '?'
    }

    closeModal = () => {
        this._active = false
        this._body = null
    }

    get body() {
        return this._body
    }

    get active() {
        return this._active
    }

}