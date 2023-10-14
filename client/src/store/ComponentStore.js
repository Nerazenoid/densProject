import {makeAutoObservable} from 'mobx'

export default class ComponentStore {
    constructor() {
        this._active = false
        this._body = null
        this._dropActive = false
        this._page = 1
        this._totalCount = 0
        this._limit = 0
        this._mainShown = false
        this._mobileNavShown = false
        makeAutoObservable(this)
    }

    showMainModal = () => {
        this._mainShown = true
    }

    closeMainModal = () => {
        this._mainShown = false
    }

    setPage = (page) => {
        this._page = page || 1
    }

    setTotalCount = (count) => {
        this._totalCount = count
    }

    setLimit =(limit) => {
        this._limit = limit
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

    openMobileNav = () => {
        this._mobileNavShown = true
    }

    closeMobileNav = () => {
        this._mobileNavShown = false
    }

    get mobileNavShown() {
        return this._mobileNavShown
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

    get totalCount() {
        return this._totalCount
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

    get mainModalActive() {
        return this._mainShown
    }

}