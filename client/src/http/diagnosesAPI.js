import { $host } from "./index";

export const getDiagnoses = async() => {
    const {data} = await $host.get('api/admin/getdiagnoses')
    return data
}