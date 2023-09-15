import {$host} from './index'

export const createRequest = async(phone, fullname) => {
    await $host.post('/api/request/create', {phone, fullname})
}

export const getRequests = async(page, limit = 10) => {
    const {data} = await $host.get('/api/request/getrequests', {params: {page,limit}})
    return data
}