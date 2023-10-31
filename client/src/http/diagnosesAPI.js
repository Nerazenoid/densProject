import { $host } from "./index";

export const getDiagnoses = async() => {
    const {data} = await $host.get('api/admin/getdiagnoses')
    return data
}

export const getDiagnosis = async(diagnosisid) => {
    const {data} = await $host.get('api/admin/getdiagnosis', {params: {diagnosisid}} )
    return data
}