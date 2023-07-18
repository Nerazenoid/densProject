import {$authHost, $host} from './index'

export const registration = async (login,password) => {
    const response = await $host.post('api/user/registration', {login, password, role: 'USER'})
    return response
}

