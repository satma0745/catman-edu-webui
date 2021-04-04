import axios from 'axios'

const getPaginatedCall = async ({ page, pageSize }, { groupId, fullName }) => {
  const response = await axios.get('/students', { params: { page, pageSize, groupId, fullName } })
  const { resource } = response.data

  const students = resource.items
  const paginationInfo = { pagesCount: resource.pagesCount }
  return { students, paginationInfo }
}

export default getPaginatedCall
