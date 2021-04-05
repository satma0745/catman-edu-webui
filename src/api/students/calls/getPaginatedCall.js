import axios from 'axios'

const getPaginatedCall = async ({ page, pageSize }) => {
  const response = await axios.get('/students', { params: { page, pageSize } })
  const { resource } = response.data

  const students = resource.items
  const paginationInfo = { pagesCount: resource.pagesCount }
  return { students, paginationInfo }
}

export default getPaginatedCall
