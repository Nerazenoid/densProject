import { makeAutoObservable } from 'mobx'

export default class AppointmentStore {
    constructor() {
        this._times = []
        this._dates = []
        makeAutoObservable(this)
    }

    setTimes(times) {
        this._times = times
    }

    setDates(dates) {
        this._dates = dates
    }

    get times() {
        return this._times
    }

    get dates() {
        return this._dates
    }
}