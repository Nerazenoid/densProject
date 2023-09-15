import { makeAutoObservable } from "mobx";

export default class RequestStore {
    constructor() {
        this._requests = []

        makeAutoObservable(this)
    }

    setRequests(requests) {
        this._requests = requests
    }

    get requests() {
        return this._requests
    }
}