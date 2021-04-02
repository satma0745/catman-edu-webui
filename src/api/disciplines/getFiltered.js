import axios from 'axios'

const getFiltered = async ({ title, grade } = {}) => {
  const response = await axios.get('/disciplines', { params: { title, grade } })
  return response.data.resource
}

const queryWrapper = ({ queryKey }) => {
  const [_, filter] = queryKey
  return getFiltered(filter)
}

export default queryWrapper
