import axios from 'axios'
import { ValidationError } from '../../common'

const signInCall = async ({ username, password }) => {
  try {
    const response = await axios.post('users', { username, password })
    return response.data.resource
  } catch (error) {
    const { response: { status, data: { validationErrors } } = { data: {} } } = error

    if (status === 404) {
      throw new ValidationError({ username: 'Пользователь с таким логином не существует' })
    }

    if (validationErrors) {
      throw new ValidationError({ ...validationErrors, password: validationErrors.Password })
    }

    throw error
  }
}

export default signInCall
