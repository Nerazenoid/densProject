import { useContext, useState } from 'react'
import { doRegistration, doLogin } from '../http/userAPI'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

const Auth = observer(() => {

  const [login, setLogin] = useState('')
  const {user} = useContext(Context)
  console.log(user)

  let data

  const signIn = async () => {
    data = await doRegistration(login, 'pass')
  }
  const signOn = async () => {
    data = await doLogin(login, 'pass')
  }

  return (
    <div>
      <input type='text' placeholder='Логин' value={login} onChange={e => setLogin(e.target.value)}></input>
      <input type='password' placeholder='Пароль'></input>
      <button
        onClick={signIn}
      >Войти</button>
    </div>
  );
})

export default Auth;