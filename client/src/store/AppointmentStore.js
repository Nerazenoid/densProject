import { makeAutoObservable } from 'mobx'

export default class AppointmentStore {
    constructor() {
        this._times = []
        this._days = []
        this._selectedDay = []
        this._selectedTime = []
        this._doctors = []
        this._appointments = []
        this._page = 1
        this._totalCount = 0
        this._limit = 10
        
        makeAutoObservable(this)
    }

    setPage(page){
        this._page = page || 1
    }

    setTotalCount(count){
        this._totalCount = count
    }

    setAppointments(appointments){
        this._appointments = appointments
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

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

    get totalCount() {
        return this._totalCount
    }

    get appointments() {
        return this._appointments
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