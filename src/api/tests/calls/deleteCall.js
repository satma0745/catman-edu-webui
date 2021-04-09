import axios from 'axios'
import { getUserInfo } from 'auth'

const deleteCall = (id) => {
  const token = getUserInfo()?.token
  const auth = `Bearer ${token}`

  return axios.delete(`/tests/${id}`, { headers: { Authorization: auth } })
}

export default deleteCall
