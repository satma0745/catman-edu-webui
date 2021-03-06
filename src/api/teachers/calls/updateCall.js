import axios from 'axios'
import { getUserInfo } from 'auth'

import { NotFoundError, ValidationError } from 'api/common'

const updateCall = async (id, teacher) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    return await axios.put(`/teachers/${id}`, teacher, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError()
    }

    if (error.response?.data?.validationErrors) {
      const { Username, Password } = error.response?.data?.validationErrors
      throw new ValidationError({ username: Username, password: Password })
    }

    throw error
  }
}

export default updateCall
