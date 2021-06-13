import axios from 'axios'

const getPaginatedCall = async ({ page, pageSize }) => {
  const response = await axios.get('/teachers', { params: { page, pageSize } })
  const { resource } = response.data

  const teachers = resource.items
  const paginationInfo = { pagesCount: resource.pagesCount }
  return { teachers, paginationInfo }
}

export default getPaginatedCall
