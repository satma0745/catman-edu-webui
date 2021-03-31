import axios from 'axios'

const configureAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL
  axios.defaults.headers.common['Accept-Language'] = process.env.REACT_APP_API_ACCEPT_LANGUAGE
}

export default configureAxios
