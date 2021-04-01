import axios from 'axios'
import { getUserInfo } from '../../auth'

const updateDiscipline = async (discipline = {}) => {
  try {
    const token = getUserInfo()?.token
    await axios.post('/disciplines', discipline, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return { success: true }
  } catch (error) {
    if (error?.response?.data?.validationErrors) {
      const { Title: title, Grade: grade } = error?.response?.data?.validationErrors
      return { success: false, validation: { title, grade } }
    }

    return { success: false, error }
  }
}

export default updateDiscipline
