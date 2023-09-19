import {$host} from './index'

export const createRequest = async(phone, fullname) => {
    await $host.post('/api/request/create', {phone, fullname})
}

export const getRequests = async(page, limit = 10) => {
    const {data} = await $host.get('/api/request/getrequests', {params: {page,limit}})
    return data
}

export const getRequest = async(id) => {
    const {data} = await $host.get('/api/request/getrequest/' + id)
    return data
}

export const updateRequest = async(id, status) => {
    await $host.post('/api/request/update', {id,status})
}