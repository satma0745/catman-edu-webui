import axios from 'axios'
import { getUserInfo } from 'auth'

import { NotFoundError, ValidationError } from 'api/common'

const updateCall = async (id, student) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    return await axios.put(`/students/${id}`, student, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError()
    }

    if (error.response?.data?.validationErrors) {
      const { Username, Password, FullName } = error.response?.data?.validationErrors
      throw new ValidationError({ username: Username, password: Password, fullName: FullName })
    }

    throw error
  }
}

export default updateCall
