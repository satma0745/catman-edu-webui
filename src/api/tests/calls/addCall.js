import axios from 'axios'
import { getUserInfo } from 'auth'

import { ValidationError } from 'api/common'

const addCall = async ({ title, disciplineId }) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    return await axios.post('/tests', { title, disciplineId }, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.data?.validationErrors) {
      const { Title } = error.response?.data?.validationErrors
      throw new ValidationError({ title: Title })
    }

    throw error
  }
}

export default addCall
