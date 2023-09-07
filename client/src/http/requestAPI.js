import {$host} from './index'

export const createRequest = async(phone, fullname) => {
    await $host.post('/api/request/create', {phone, fullname})
}