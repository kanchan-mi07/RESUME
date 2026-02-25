import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})
console.log("BASE URL:", import.meta.env.VITE_BASE_URL)

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")

  if (token) {
    config.headers.Authorization = token   // ✅ NO Bearer
  }

  return config
})

export default api
