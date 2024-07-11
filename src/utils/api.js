import axios from 'axios'

const api = axios.create({
    baseURL: 'https://aircall-backend.onrender.com/',
    timeout: 8000,
})

export default api