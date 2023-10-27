import style from './dropdown.module.css'
const Toggle = ({children}) => {
    return (
        <div className={style.toggle}>{children}</div>
    )
}
export default Toggle