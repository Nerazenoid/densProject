import style from './dropdown.module.css'
import {useContext, useState} from "react";
import {DropdownContext} from "./diagnosisDropdown";

const Menu = ({children}) => {
    const {shown, setShown} = useContext(DropdownContext);
    return (
        <div
            className={shown? style.list : `${style.list} ${style.hidden}`}
        >
            {children}
        </div>
    )
}
export default Menu