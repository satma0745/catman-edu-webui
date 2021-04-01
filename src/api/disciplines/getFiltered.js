import axios from 'axios'

const getFiltered = async ({ title, grade } = {}) => {
  try {
    const response = await axios.get('/disciplines', { params: { title, grade } })
    return { success: true, disciplines: response.data.resource }
  } catch (error) {
    return { success: false, error }
  }
}

export default getFiltered
