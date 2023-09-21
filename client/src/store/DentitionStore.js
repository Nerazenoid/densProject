import { makeAutoObservable } from "mobx";

export default class DenitionStore {
    constructor() {
        this._list = [
            {
                1: 'П', 2: 'С'
            },
            {
                1: 'Л', 2: 'Д', 3: 'Ж'
            }
        ]

        makeAutoObservable(this)
    }

    get list() {
        return this._list
    }

    setList(list) {
        this._list = list
    }
}