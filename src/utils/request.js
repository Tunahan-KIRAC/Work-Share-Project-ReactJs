import axios from 'axios'

const service = axios.create({
    baseURL: 'https://localhost:7031/api',
    timeout: 10000,
})

export default service