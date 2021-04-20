import axios from 'axios'
import { NotFoundError } from 'api/common'

const getStudentPerformanceCall = async (studentId) => {
  try {
    const response = await axios.get(`/testing/results/performance/${studentId}`)
    return response.data.resource
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new NotFoundError()
    }

    throw error
  }
}

export default getStudentPerformanceCall
