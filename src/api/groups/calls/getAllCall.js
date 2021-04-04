import axios from 'axios'

const getAllCall = async () => {
  const response = await axios.get('/groups')
  return response.data.resource
}

export default getAllCall
