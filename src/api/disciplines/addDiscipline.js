import axios from 'axios'
import { getUserInfo } from '../../auth'

import { ValidationError } from '../common'

const addDiscipline = async ({ title, grade }) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    return await axios.post('/disciplines', { title, grade }, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.data?.validationErrors) {
      const { Title, Grade } = error.response?.data?.validationErrors
      throw new ValidationError({ title: Title, grade: Grade })
    }

    throw error
  }
}

export default addDiscipline
