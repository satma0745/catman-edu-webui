import axios from 'axios'
import { getUserInfo } from '../../auth'

const deleteDiscipline = (id) => {
  const token = getUserInfo()?.token
  return axios.delete(`/disciplines/${id}`, { headers: { Authorization: `Bearer ${token}` } })
}

export default deleteDiscipline
