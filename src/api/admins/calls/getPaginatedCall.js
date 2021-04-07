import axios from 'axios'

const getPaginatedCall = async ({ page, pageSize }) => {
  const response = await axios.get('/users', { params: { page, pageSize, role: 'Admin' } })
  const { resource } = response.data

  const admins = resource.items
  const paginationInfo = { pagesCount: resource.pagesCount }
  return { admins, paginationInfo }
}

export default getPaginatedCall
