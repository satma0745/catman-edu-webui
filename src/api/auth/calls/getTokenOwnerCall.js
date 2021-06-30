import axios from 'axios'

const getTokenOwnerCall = async (token) => {
  const auth = `Bearer ${token}`
  const headers = { Authorization: auth }

  const response = await axios.get('/users', { headers })
  return response.data.resource
}

export default getTokenOwnerCall
