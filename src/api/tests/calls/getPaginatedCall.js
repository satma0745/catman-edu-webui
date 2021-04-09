import axios from 'axios'

const getPaginatedCall = async ({ page, pageSize }) => {
  const response = await axios.get('/tests', { params: { page, pageSize } })
  const { resource } = response.data

  const tests = resource.items
  const paginationInfo = { pagesCount: resource.pagesCount }
  return { tests, paginationInfo }
}

export default getPaginatedCall
