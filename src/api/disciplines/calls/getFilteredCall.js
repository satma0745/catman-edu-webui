import axios from 'axios'

const getFilteredCall = async ({ title, grade } = {}) => {
  const response = await axios.get('/disciplines', { params: { title, grade } })
  return response.data.resource
}

const queryWrapper = ({ queryKey }) => {
  const [_, filter] = queryKey
  return getFilteredCall(filter)
}

export default queryWrapper
