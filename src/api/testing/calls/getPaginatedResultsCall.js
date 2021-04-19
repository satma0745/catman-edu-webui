import axios from 'axios'

const getPaginatedResultsCall = async ({ page, pageSize }, { disciplineId, testId, studentId }) => {
  const response = await axios.get('/testing/results', {
    params: { page, pageSize, disciplineId, testId, studentId },
  })
  const { resource } = response.data

  const results = resource.items
  const paginationInfo = { pagesCount: resource.pagesCount }
  return { results, paginationInfo }
}

export default getPaginatedResultsCall
