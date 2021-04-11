import axios from 'axios'
import { getUserInfo } from 'auth'

const deleteCall = (id) => {
  const token = getUserInfo()?.token
  const auth = `Bearer ${token}`

  return axios.delete(`/questions/${id}`, { headers: { Authorization: auth } })
}

export default deleteCall
