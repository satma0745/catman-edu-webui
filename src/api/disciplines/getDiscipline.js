import axios from 'axios'

const getFiltered = async (id) => {
  try {
    const response = await axios.get(`/disciplines/${id}`)
    return { success: true, discipline: response.data.resource }
  } catch (error) {
    if (error?.response?.status === 404) {
      return { success: false, notFound: true }
    }

    return { success: false, error }
  }
}

export default getFiltered
