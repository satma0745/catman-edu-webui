import axios from 'axios'
import { NotFoundError } from '../common'

const getDiscipline = async (id) => {
  try {
    const response = await axios.get(`/disciplines/${id}`)
    return response.data.resource
  } catch (error) {
    if (error?.response?.status === 404) {
      throw new NotFoundError()
    }

    throw error
  }
}

const queryWrapper = ({ queryKey }) => {
  const [_, id] = queryKey
  return getDiscipline(id)
}

export default queryWrapper
