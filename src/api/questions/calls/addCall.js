import axios from 'axios'
import { getUserInfo } from 'auth'

import { ValidationError } from 'api/common'

import { questionController } from './utils'

const addCall = async ({ testId, type, text, cost, correctAnswer, items, answerOptions }) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    await axios.post(
      `/${questionController(type)}`,
      { testId, text, cost, correctAnswer, items, answerOptions },
      { headers: { Authorization: auth } }
    )
  } catch (error) {
    if (error.response?.data?.validationErrors) {
      const { Text, Cost } = error.response?.data?.validationErrors
      throw new ValidationError({ text: Text, cost: Cost })
    }

    throw error
  }
}

export default addCall
