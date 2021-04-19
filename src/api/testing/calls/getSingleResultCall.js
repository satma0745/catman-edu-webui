import axios from 'axios'
import { NotFoundError } from 'api/common'

const getSingleResultCall = async (testId, studentId) => {
  try {
    const response = await axios.get(`/testing/results/${testId}/${studentId}`)
    return response.data.resource
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new NotFoundError()
    }

    throw error
  }
}

export default getSingleResultCall
