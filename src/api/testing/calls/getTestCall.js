import axios from 'axios'
import { NotFoundError } from 'api/common'

const getTestCall = async (id) => {
  try {
    const response = await axios.get(`/testing/${id}`)
    return response.data.resource
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new NotFoundError()
    }

    throw error
  }
}

export default getTestCall
