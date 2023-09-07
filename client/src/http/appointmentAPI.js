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

export const createProvidedServices = async(services, appt_id) => {
    await $host.post('/api/appointment/addservices', {services, appt_id})
}

export const getDoctors = async () => {
    const { data } = await $host.get('/api/appointment/getdoctors')
    return data
}

export const getAppointments = async (page, limit = 10) => {
    const {data}  = await $host.get('/api/appointment/getlist', {params: {page,limit}})
    return data
}

export const getDoctorAppointments = async(user_id, page, limit = 5 ) => {
    const {data} = await $host.get('api/admin/doctorappointments/' + user_id, {params: {page, limit}})
    return data
}

export const getAppointmentInfo = async (appt_id) => {
    const { data } = await $host.get('/api/appointment/getinfo/' + appt_id)
    return data
}

export const getServices = async() => {
    const {data} = await $host.get('api/appointment/getservices')
    return data
}

export const updatePayment = async(appt_id, discount) => {
    await $host.post('api/appointment/approvepayment', {appt_id, discount})
}

export const cancelAppointment = async(appt_id) => {
    await $host.post('api/appointment/cancelappointment', {appt_id})
}

export const getProvidedServices = async(appt_id) => {
    const {data} = await $host.get('api/appointment/providedservices/' + appt_id)
    return data
}