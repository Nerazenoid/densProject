import {$host} from "./index";

export const getByDay = async (doctor_id, day) => {
    if(!doctor_id) {doctor_id = 0}
    const {data} = await $host.get('/api/appointment/getday', {params: {doctor_id, day}})
    return data
}

export const getDays = async () => {
    const {data} = await $host.get('/api/appointment/getdays')
    return data
}