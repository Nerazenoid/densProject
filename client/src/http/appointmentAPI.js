import { $host } from "./index";

export const getByDay = async (doctor_id, day) => {
    if (!doctor_id) { doctor_id = 0 }
    const { data } = await $host.get('/api/appointment/getday', { params: { doctor_id, day } })
    return data
}

export const getDays = async () => {
    const { data } = await $host.get('/api/appointment/getdays')
    return data
}

export const createAppointment = async (date, doctor_id, user_id) => {
    await $host.post('/api/appointment/create', { date, doctor_id, user_id })
}

export const getDoctors = async (date) => {
    const { data } = await $host.get('/api/appointment/getdoctors', { date })
    return data
}