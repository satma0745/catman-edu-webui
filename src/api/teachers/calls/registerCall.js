import axios from 'axios'
import { getUserInfo } from 'auth'

import { ValidationError } from 'api/common'

const registerCall = async (teacher) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    await axios.post('/teachers', teacher, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.data?.validationErrors) {
      const { Username, Password } = error.response?.data?.validationErrors
      throw new ValidationError({ username: Username, password: Password })
    }

    throw error
  }
}

export default registerCall
