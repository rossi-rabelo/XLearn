import axios from 'axios'

export default async ({ Vue }) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    crossdomain: true
  })

  Vue.prototype.$axios = axiosInstance
}
