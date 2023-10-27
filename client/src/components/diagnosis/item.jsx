import style from './dropdown.module.css'

const Item = ({onClick, children}) => {
    return (
        <div className={style.item} onClick={onClick}>{children}</div>
    )
}
export default Item