import axios from 'axios'
import { getUserInfo } from '../../auth'

const deleteDiscipline = async (id) => {
  try {
    const token = getUserInfo()?.token
    await axios.delete(`/disciplines/${id}`, { headers: { Authorization: `Bearer ${token}` } })

    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

export default deleteDiscipline
