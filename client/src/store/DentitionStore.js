import { makeAutoObservable } from "mobx";

export default class DenitionStore {
    constructor() {
        this._list = [
            {
                1: '', 2: '', 3: 'К', 4: ''
            },
            {
                1: '', 2: '', 3: '', 4: ''
            },
            {
                1:'В'
            }
        ]
        this._dropdownOpen = false
        this._x = 0;
        this._y = 0;
        this._selectedTooth = 0;
        this._selectedSurf = 0;

        makeAutoObservable(this)
    }

    get selectedTooth(){
        return this._selectedTooth
    }
    get selectedSurf(){
        return this._selectedSurf
    }

    get x(){
        return this._x
    }
    get y(){
        return this._y
    }

    get dropdownOpen() {
        return this._dropdownOpen
    }
    get list() {
        return this._list
    }

    openDropdown() {
        this._dropdownOpen = true
    }
    closeDropdown() {
        this._dropdownOpen = false
    }

    setSelectedTooth(tooth){
        this._selectedTooth = tooth
    }

    setSelectedSurf(surf){
        this._selectedSurf = surf 
    }
    
    setX(x) {
        this._x = x + 10
    }

    setY(y) {
        this._y = y - 20
    }

    setList(list) {
        this._list = list
    }
}