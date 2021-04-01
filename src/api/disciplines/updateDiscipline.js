import axios from 'axios'
import { getUserInfo } from '../../auth'

const updateDiscipline = async (id, discipline = {}) => {
  try {
    const token = getUserInfo()?.token
    await axios.put(`/disciplines/${id}`, discipline, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return { success: true }
  } catch (error) {
    if (error?.response?.status === 404) {
      return { success: false, notFound: true }
    }

    if (error?.response?.data?.validationErrors) {
      const { Title: title, Grade: grade } = error?.response?.data?.validationErrors
      return { success: false, validation: { title, grade } }
    }

    return { success: false, error }
  }
}

export default updateDiscipline
