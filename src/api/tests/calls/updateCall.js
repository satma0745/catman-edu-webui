import axios from 'axios'
import { getUserInfo } from 'auth'

import { NotFoundError, ValidationError } from 'api/common'

const updateCall = async (id, { title, disciplineId }) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    return await axios.put(
      `/tests/${id}`,
      { title, disciplineId },
      { headers: { Authorization: auth } }
    )
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError()
    }

    if (error.response?.data?.validationErrors) {
      const { Title } = error.response?.data?.validationErrors
      throw new ValidationError({ title: Title })
    }

    throw error
  }
}

export default updateCall
