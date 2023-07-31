import { makeAutoObservable } from 'mobx'

export default class AppointmentStore {
    constructor() {
        this._times = []
        this._days = []
        this._selectedDay = []
        makeAutoObservable(this)
    }

    setTimes(times) {
        this._times = times
    }

    setDays(days) {
        this._days = days
    }

    setSelectedDay(day) {
        this._selectedDay = day
    }

    get times() {
        return this._times
    }

    get days() {
        return this._days
    }

    get selectedDay() {
        return this._selectedDay
    }
}