import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const doRegistration = async (login,password) => {
    const {data} = await $host.post('api/auth/registration', {login, password, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const doLogin = async (login,password) => {
    const {data} = await $host.post('api/auth/login', {login, password})
    localStorage.setItem('token', data.token)
    console.log(data.token)
    console.log(jwt_decode(data.token).id)
    return jwt_decode(data.token)
}
