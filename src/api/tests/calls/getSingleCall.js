import axios from 'axios'
import { NotFoundError } from 'api/common'

const getSingleCall = async (id) => {
  try {
    const response = await axios.get(`/tests/${id}`)
    return response.data.resource
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new NotFoundError()
    }

    throw error
  }
}

export default getSingleCall
