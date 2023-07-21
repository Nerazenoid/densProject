import {$authHost, $host} from './index'
import jwt_decode from 'jwt-decode'

export const doRegistration = async (login,password) => {
    const {data} = await $host.post('api/user/registration', {login, password, role: 'USER'})
    return jwt_decode(data.token)
}

export const doLogin = async (login,password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    return jwt_decode(data.token)
}
