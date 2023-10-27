import style from './dropdown.module.css'
import Item from './item'
import Toggle from "./toggle";
import Menu from "./menu";
import {createContext, useState} from "react";

export const DropdownContext = createContext({
    shown: false,
    setShown: () => true ,
})

const DiagnosisDropdown = ({props, children}) => {
    const [shown, setShown] = useState(false)
    return (
        <DropdownContext.Provider value={{shown, setShown}}>
            <div className={style.main} onClick={() => setShown(!shown)}>
                {children}
            </div>
        </DropdownContext.Provider>
    )
}


DiagnosisDropdown.Toggle = Toggle;
DiagnosisDropdown.Menu = Menu
DiagnosisDropdown.Item = Item;
export default DiagnosisDropdown