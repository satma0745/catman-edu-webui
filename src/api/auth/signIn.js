import axios from 'axios'

const signIn = async (credentials) => {
  try {
    const response = await axios.post('users', credentials)
    return { success: true, userInfo: response.data.resource }
  } catch (error) {
    const {
      status,
      data: { validationErrors },
    } = error.response

    if (status === 404) {
      return {
        success: false,
        validation: { username: 'Пользователь с таким логином не существует' },
      }
    }

    if (validationErrors) {
      return {
        success: false,
        validation: {
          ...validationErrors,
          password: validationErrors.Password,
        },
      }
    }

    return {
      success: false,
      errorResponse: error.response,
    }
  }
}

export default signIn
