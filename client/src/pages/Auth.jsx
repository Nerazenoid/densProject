import { useContext, useState } from 'react'
import { doRegistration, doLogin } from '../http/userAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { LANDING_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation, useNavigate, } from 'react-router-dom';

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [pass, setPassword] = useState('')
  const navigate = useNavigate()


  const signIn = async () => {
    try {
      let data
      data = await doRegistration(login, pass)
      user.setUser(data)
      user.setIsAuth(true)
      console.log(user.isAuth)
      navigate(LANDING_ROUTE)
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
      navigate(LANDING_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <div>
      <input type='text' placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}></input>
      <input type='password' placeholder='Пароль'
        value={pass}
        onChange={e => setPassword(e.target.value)}></input>
      <button
        onClick={isLogin ? signOn : signIn}
      >{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
      <NavLink
        to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
        {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже зарегистрированы? Войти'}
      </NavLink>
    </div>
  );
})

export default Auth;