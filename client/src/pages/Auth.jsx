import { useContext, useEffect, useState } from 'react'
import { doRegistration, doLogin } from '../http/userAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { LANDING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE } from '../utils/consts';
import { NavLink, useLocation, useNavigate, } from 'react-router-dom';
import style from '../components/auth.module.css'

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [phone, setPhone] = useState('')
  const [pass, setPassword] = useState('')
  const [fullname, setFullname] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
  })
  const [birthday, setBirthday] = useState()

  const navigate = useNavigate()


  const signIn = async () => {
    try {
      let data
      data = await doRegistration(login, pass, phone, fullname, birthday)
      user.setUser(data)
      user.setIsAuth(true)
      console.log(user.isAuth)
      navigate(USER_ROUTE + '/' + data.login)
    } catch (e) {
      alert(e.response.data.message)
    }

  }
  const signOn = async () => {
    try {
      let data
      data = await doLogin(login, pass)
      user.setUser(data)
      user.setIsAuth(true)
      console.log(user.user)
      navigate(USER_ROUTE + '/' + data.login)
    } catch (e) {
      alert(e.response.data.message)
    }
  }


  return (
    <div className={style.page}>
      <div className={style.form}>
        <div className={style.inputs_block}>
          <input type='text' className={style.input} placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}></input>
          <input type='password' className={style.input} placeholder='Пароль'
            value={pass}
            onChange={e => setPassword(e.target.value)}></input>
          {!isLogin ? (
            <div className={style.regblock}>
              <input type='text' className={style.input} placeholder='Фамилия' value={fullname.lastName} onChange={e => setFullname({ ...fullname, lastName: e.target.value })}></input>
              <input type='text' className={style.input} placeholder='Имя' value={fullname.firstName} onChange={e => setFullname({ ...fullname, firstName: e.target.value })}></input>
              <input type='text' className={style.input} placeholder='Отчество (необязательно)' value={fullname.patronymic} onChange={e => setFullname({ ...fullname, patronymic: e.target.value })}></input>
              <div className={style.datepicker_block}>
                <p className={style.subtitle}>Дата рождения:</p>
                <input type='date' className={style.datepicker} onChange={e=> setBirthday(e.target.value)}></input>
              </div>
              <input type='tel' className={style.input} placeholder='Номер телефона' value={phone} onChange={e => setPhone(e.target.value)}></input>
            </div>
          )
            : ('')}
        </div>
        <button
          className={style.submit_btn}
          onClick={isLogin ? signOn : signIn}
        >{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        <NavLink
          className={style.link}
          to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
          {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже зарегистрированы? Войти'}
        </NavLink>
      </div>
    </div>
  );
})

export default Auth;