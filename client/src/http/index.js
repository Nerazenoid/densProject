import axios from "axios"

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}
/*$authHost.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        console.log('Ошибка')
    }
    return error;
})*/

$authHost.interceptors.request.use(authInterceptor)

export{
    $host,
    $authHost
}