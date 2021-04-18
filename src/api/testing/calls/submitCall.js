import axios from 'axios'
import { getUserInfo } from 'auth'

import { NotFoundError } from 'api/common'

const submitCall = async (testId, test) => {
  try {
    const token = getUserInfo()?.token
    const headers = { Authorization: `Bearer ${token}` }

    const response = await axios.post(`/testing/${testId}`, test, { headers })
    return response.data.resource
  } catch (error) {
    if (error.response?.status === 404) {
      throw new NotFoundError()
    }

    throw error
  }
}

export default submitCall
