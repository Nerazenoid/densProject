import {registration} from '../http/userAPI'

const signIn = async () => {
  const response = await registration('user3', 'pass')
}

const Auth = () => {
  return (
    <button
      onClick={signIn}
    >Войти</button>
  );
}

export default Auth;