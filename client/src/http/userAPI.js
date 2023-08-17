import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const doRegistration = async (login, password, phone, fullname, birthday) => {
    const { data } = await $host.post('api/auth/registration', { login, password, role: 'USER', phone, fullname, birthday })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const doLogin = async (login, password) => {
    const { data } = await $host.post('api/auth/login', { login, password })
    localStorage.setItem('token', data.token)
    console.log(data.token)
    console.log(jwt_decode(data.token).id)
    return jwt_decode(data.token)
}

export const check = async () => {
    const { data } = await $authHost.get('api/auth/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const getUsers = async (search_query) => {
    const {data} = await $host.get('api/admin/getusers/' + search_query)
    return data
}

export const getUserInfo = async(login) => {
    const {data} = await $host.get('api/admin/getuser/' + login)
    return data
}