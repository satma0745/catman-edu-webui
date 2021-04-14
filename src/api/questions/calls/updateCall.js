import axios from 'axios'
import { getUserInfo } from 'auth'

import { NotFoundError, ValidationError } from 'api/common'

const questionController = (questionType) => {
  switch (questionType) {
    case 'Choice':
      return 'questions/choice'
    // case 'Order':
    //   return 'orderQuestions'
    case 'Value':
      return 'valueQuestions'
    case 'YesNo':
      return 'yesNoQuestions'
    default:
      throw new Error(`Unknown question type "${questionType}"`)
  }
}

const updateCall = async (id, question) => {
  try {
    const token = getUserInfo()?.token
    const auth = `Bearer ${token}`

    const controller = questionController(question.type)
    return await axios.put(`/${controller}/${id}`, question, { headers: { Authorization: auth } })
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError()
    }

    if (error.response?.data?.validationErrors) {
      const { Cost, Text, CorrectAnswer } = error.response?.data?.validationErrors
      throw new ValidationError({ cost: Cost, text: Text, correctAnswer: CorrectAnswer })
    }

    throw error
  }
}

export default updateCall
