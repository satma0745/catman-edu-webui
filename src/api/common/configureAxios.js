import axios from 'axios'
import { signOut } from 'auth'

const configureAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
  axios.defaults.headers.common['Accept-Language'] = process.env.REACT_APP_API_ACCEPT_LANGUAGE

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        signOut()
      }
      return Promise.reject(error)
    }
  )
}

export default configureAxios
