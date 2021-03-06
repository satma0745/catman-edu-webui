import axios from 'axios'
import { getUserInfo } from 'auth'

import { ValidationError } from 'api/common'

const registerCall = async ({ username, password, fullName, groupId }) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    const student = { username, password, fullName, groupId }
    await axios.post('/students', student, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.data?.validationErrors) {
      const { Username, Title, Grade } = error.response?.data?.validationErrors
      throw new ValidationError({ username: Username, title: Title, grade: Grade })
    }

    if (error.response?.status === 404) {
      throw new ValidationError({ groupId: 'Такой группы не существует' })
    }

    throw error
  }
}

export default registerCall
