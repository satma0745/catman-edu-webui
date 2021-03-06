import axios from 'axios'
import { getUserInfo } from 'auth'

import { NotFoundError, ValidationError } from 'api/common'

const updateCall = async (id, group) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    return await axios.put(`/groups/${id}`, group, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError()
    }

    if (error.response?.data?.validationErrors) {
      const { Title, Grade } = error.response?.data?.validationErrors
      throw new ValidationError({ title: Title, grade: Grade })
    }

    throw error
  }
}

export default updateCall
