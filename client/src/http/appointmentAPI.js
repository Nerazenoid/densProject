import {$host} from "./index";

export const getByDay = async (doctor_id) => {
    if(!doctor_id) {doctor_id = 0}
    const {data} = await $host.get('/api/appointment/getday?doctor_id=' + doctor_id)
    return data
}