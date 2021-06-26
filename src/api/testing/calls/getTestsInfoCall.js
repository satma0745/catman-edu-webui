import axios from 'axios'

const getTestsInfoCall = async (disciplineId, studentId) => {
  const response = await axios.get(`/testing/discipline/${disciplineId}/student/${studentId}`)
  return response.data.resource
}

export default getTestsInfoCall
