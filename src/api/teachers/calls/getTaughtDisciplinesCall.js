import axios from 'axios'

const getTaughtDisciplinesCall = async (teacherId) => {
  const response = await axios.get(`/teachers/${teacherId}/disciplines`)
  return response.data.resource
}

export default getTaughtDisciplinesCall
