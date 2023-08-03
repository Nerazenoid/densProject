import { makeAutoObservable } from 'mobx'

export default class AppointmentStore {
    constructor() {
        this._times = []
        this._days = []
        this._selectedDay = []
        this._selectedTime = []
        this._doctors = []
        
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

    setSelectedTime(time) {
        this._selectedTime = time
    }

    setDoctors(doctors) {
        this._doctors = doctors
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
    get selectedTime() {
        return this._selectedTime
    }

    get doctors(){
        return this._doctors
    }
}